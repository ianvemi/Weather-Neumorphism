import React from 'react';

const Weather = ({result}) => {
    let {name, main, sys, weather} = result;
    // evita la ejecución si no encuentra name
    if(!name) {
        return null;
      }
    let img = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    
  
    return ( 
        <div className="weather-background">
        <div className="weather-content" >
        <div className="title">
        <h1>{name}</h1>
        <span>{sys.country}</span>
        <img src={img} alt="icon"></img>
        </div>

        <div className="temp">
        <p>- {weather[0].main} -</p>
        <p>: {weather[0].description}</p>
        <p className="tempe">{main.temp} °C</p>
        <span>{main.temp_min} °C  - {main.temp_max} °C </span>
        </div>
        </div>
        

        </div>
     );
}
 
export default Weather;