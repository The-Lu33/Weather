import { useState } from "react";
import "../App.css";
import useApiImport from "../hooks/useApiImport";

function Weather() {
  const { api: weather } = useApiImport();

  
  const [temp,setTempe] = useState(true) 
    let change=()=>{
    setTempe(!temp)
  }

const city = weather.name;
const celcius =(weather.main?.temp - 273.15).toFixed(2)


  return (
    <div className="Weather">
      <h1>Meteorological Time</h1>
      <h2>
        Weather in the city {weather.sys?.country}/{city}
      </h2>
      <div className="info__container">

      <img
        src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
        alt="image" className="image"
        />
      <div className="grados__info">
        <h3>{weather.weather?.[0].description}</h3>
        <p>
          Wind Speed: {weather.wind?.speed}m/s
        </p>
        <p>Clouds: {weather.clouds?.all}%</p>
        <p>Pressure: {weather.main?.pressure} mb</p>
      </div>
        </div>
      <h2 className="temp">Temperature: {temp?celcius:weather.main?.temp}</h2>
      <button onClick={change}>Degrees °F/°C</button>
    </div>
  );
}

export default Weather;
