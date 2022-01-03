import React, {useState, useEffect} from 'react';
import WeatherCard from './weathercard'
import '../weather/style.css';

function Temp() {
  const [searchValue, setSearchValue] = useState("pune");

  //add myNewWeatherInfo object data into our state 
  const [tempInfo, setTempInfo] = useState({})

  const getWeatherInfo = async ()=> {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=beb64aef2e2e352ca37fab89aadec87c`;
      const res = await fetch(url);
      const data = await res.json();
      //destructring for getting tmp data 
      const {temp, humidity, pressure} = data.main;
      const {main: weathermood } = data.weather[0];
      const {name} = data;
      const {speed} = data.wind;
      const {country, sunset} = data.sys;
      //get all data one by one in this object
      const myNewWeatherInfo = {
        temp, 
        humidity,
        pressure,
        speed,
        country,
        sunset,
        weathermood,
        name
      };

      /*pass my obj data myNewWeatherInfo into setTempInfo state */
      setTempInfo(myNewWeatherInfo)
      console.log('==temp==', temp);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getWeatherInfo()
  }, [])
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type="search"
            placeholder="...search"
            autoFocus
            id="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="searchTerm" />
          <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
        </div>
      </div>
{/*=====our temp card===== */}
<WeatherCard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp
