import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Alert, Container, Modal, ListGroup } from 'react-bootstrap';

import { TRAFIKLAB_REALTIME_DEPATURE, TRAFIKLAB_SEARCHABLE_STOPS } from './constants/keys';
import 'react-day-picker/lib/style.css';
import './App.css';
import ClassNames from 'classnames';
import Sound from 'react-sound';

class App extends Component {
  

  const [query, setQuery] = useState('Hammarbyhojden');

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const [departures, setDepatures] = useState({departures: {}});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      const maxResults = 10;
      const timeWindow = 20;
      const siteURL = `https://api.sl.se/api2/typeahead.jsonp?key=${TRAFIKLAB_SEARCHABLE_STOPS}&searchstring=${query}&stationsonly=${true}&maxresults=${maxResults}`;
      
      try {
        const siteResult = await axios(
          siteURL,
          {
            headers: {
              dataType: 'jsonp',
            }
          }
        );
        const siteId = siteResult.data.ResponseData[0].SiteId;
        if(siteId === undefined) return;
        
        const depatureURL = `https://api.sl.se/api2/realtimedeparturesV4.jsonp?key=${TRAFIKLAB_REALTIME_DEPATURE}&siteid=${siteId}&timewindow=${timeWindow}`;
        const depatureResult = await axios(
          depatureURL,
          {
            headers: {
              dataType: 'jsonp',
            }
          }
        );
        setDepatures(depatureResult);
      } catch(error) {
        setIsError(true)
      }
      setIsLoading(false);
    };
    fetchData();
  }, [query]);
  
  const compareDates = (date) => {
    let duration = moment.duration(moment(date).diff(new Date()));

    let diff = Math.floor(duration.asMinutes());
    let renderType = "success";

    if(diff < 11 ) renderType = "warning";
    if(diff < 5 ) renderType = "danger";
    
    return renderType;
  }

  return (
    <Container className="">
      <Modal.Header className="">
        <h1>Avgångar från </h1>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)} 
        />
      </Modal.Header>
      <div className="">
        { isLoading ? (<div>Loading ...</div>) : (
          <div>
            { departures.data ?  (
              <ListGroup>
              { departures.data.ResponseData.Metros.map((departure, index) => (
                  <ListGroup.Item variant={compareDates(departure.ExpectedDateTime)} key={index.toString()} >
                    {console.log(compareDates(departure.ExpectedDateTime))}
                    <p>{`${departure.Destination} ${moment(moment(departure.ExpectedDateTime).format('YYYYMMDDkkmmss'), 'YYYYMMDDkkmmss').fromNow()}`}</p>
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
            ):(
              <ListGroup>
                <ListGroup.Item>
                  <p>Empty result</p>
                </ListGroup.Item>
              </ListGroup>
            )}
            
          </div>
          
        )}
      </div>
      {isError && 
        <Alert variant="danger">
          <Alert.Heading>No data accessable</Alert.Heading>
          <p>Try again later</p>
        </Alert>}
    </Container>
  );
}
