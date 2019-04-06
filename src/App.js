import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './App.css';
// import ClassNames from 'classnames';
// import Sound from 'react-sound'; 

export default function App(props) {
  
  const API_KEY = 'Nv6JENKOagk7nHmHTpKBfqXKk5z4PUtRs1nCAhRU'; // fix me

  const [query, setQuery] = useState('redux');
  const [date, setDate] = useState(new Date());


  const [data, setData] = useState({item: {}});

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      const url = `Https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&hd=true&date=${moment(date).format('YYYY-MM-DD')}`;
      console.log('url', url);
      try {
        const result = await axios(
          url,
          );
          setData(result.data);
      } catch(error) {
        setIsError(true)
      }
      setIsLoading(false);
    };
    fetchData();
  }, [date]);
  

  return (
    <div className="App">
      <div className="App-info">
        {/* <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)} 
          /> */}
          <DayPicker
            onDayClick={(event) => setDate(event)}/>
          {console.log('isError',isError)}
          {console.log('isLoading',isLoading)}
          {isError && <div>Something went wrong ...</div>}
        </div>
      <div className="App-header">
        { isLoading ? (<div>Loading ...</div>) : (
          <img src={data.url} alt={data.explanation}
          />
        )}
      </div>
    </div>
  );
}
