import React from 'react'
import { useState } from 'react';

function WeatherDetails(
  {temp,humidity, pressure, weatherType, name, speed,country, sunset}
){
  const [weatherState, setWeatherState] = useState('');
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <div>
      <article className='widget'>
        <div className="weatherIcon">
          <i className="wi wi-day-sunny"></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp} &#176; </span>
          </div>
          <div className="description">
            <div className="weatherCondition"> {weatherType} </div>
            <div className="place">{name}, {country}</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
            <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={'wi wi-sunset'}></i>
              </p>
              <p className='extra-info-leftside'>
                  {timeStr} PM <br/>
                  Sunset
              </p>
            </div>
            </div>
            
            <div className="two-sided-section">
              <p>
                <i className={'wi wi-humidity'}></i>
              </p>
              <p className='extra-info-leftside'>
                  {humidity} <br/>
                  Humidity
              </p>
            </div>
            
            <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={'wi wi-rain'}></i>
              </p>
              <p className='extra-info-leftside'>
                  {pressure} <br/>
                  Pressure
              </p>
            </div>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={'wi wi-strong-wind'}></i>
              </p>
              <p className='extra-info-leftside'>
                  {speed} <br/>
                  Speed
              </p>
            </div>
        </div>
      </article>
    </div>
  )
}

export default WeatherDetails;
