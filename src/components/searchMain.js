import React, {useState, useEffect} from 'react'
import WeatherDetails from './weatherDetails';
import '../components/style.css';

function SearchMain() {
const [searchTerm, setSearchTerm] = useState("tel-aviv");
const [tempInfo, setTempInfo] = useState({});

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=d2c5972f23852b594d6b859e070294bf
//d2c5972f23852b594d6b859e070294bf
 const getWeatherInfo = async ()=> {
  try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=d2c5972f23852b594d6b859e070294bf`
    let res = await fetch(url);
    let data = await res.json();
    const {temp, pressure, humidity} = data.main;
    const {main: weatherType} = data.weather[0];
    const {name} = data;
    const {speed} = data.wind;
    const {country, sunset} = data.sys;
    const myNewWeatherInfo = {
      temp,humidity, pressure, weatherType, name, speed,country, sunset
    };
    setTempInfo(myNewWeatherInfo);

    //console.log("data = "+ JSON.stringify(data));
  }catch(err){
    console.log(err);
  }
  
}


useEffect(()=>{
  getWeatherInfo()
},[])

  return (
    <>
    <div className='wrap'>
      <div className="search">
        <input 
          type="search" 
          placeholder='type city name' 
          id='search' 
          value= {searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        /> 
      </div>
      <div className="searchButton">
        <button className='searchButton' onClick={getWeatherInfo} > 
            Search
        </button>
      </div>
    </div>
    <WeatherDetails {...tempInfo}/>
    </>
  )
}


export default SearchMain;
