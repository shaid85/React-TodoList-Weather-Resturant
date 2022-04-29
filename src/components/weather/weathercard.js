import React, { useEffect, useState } from 'react'

const Weathercard = ({tempInfo}) => {
    const [weatherState, setWeatherState] = useState("")

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      }= tempInfo

      useEffect(() =>{
        if(weathermood){
            switch (weathermood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy")
                    break

                case "Mist":
                    setWeatherState("wi-fog")
                    break

                case "Haze":
                    setWeatherState("wi-fog")
                    break

                case "Clear":
                    setWeatherState("wi-day-sunny")
                    break
            
                default:
                    setWeatherState("wi-day-sunny")
                    break
            }
        }
      },[weathermood])

      // convertion the seconds into time
      let sec = sunset;
      let date = new Date(sec * 1000)
      let timeStr = `${date.getHours()}:${date.getMinutes()}`
      
  return (
    <>
          <div className="weatherbox">
            <div className="iconbox py-4 mb-4 text-center">
              <i className={`wi ${weatherState}`}></i>
            </div>
            <div className="tempbox">
              <div className="row">
                <div className="col-sm-7">
                  <div className="d-flex justify-content-around p-4">
                    <div className="temp">{temp}</div>
                    <div className="description">
                      {weathermood}<span>{name}, {country}</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="date p-4 pe-5">
                  {
                    new Date().toLocaleString()
                  }                
                  </div>
                </div>
              </div>
            </div>
            <div className="weather-data">
              <div className="row">
                <div className="col-sm-3">
                  <div className="widget d-flex p-3">
                    <i className="wi wi-day-sunny"></i>
                    <p>
                      {timeStr} PM<span>Sunset</span>
                    </p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="widget d-flex p-3">
                    <i className="wi wi-humidity"></i>
                    <p>
                      {humidity}<span>Humidity</span>
                    </p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="widget d-flex p-3">
                    <i className="wi wi-rain"></i>
                    <p>
                      {pressure}<span>Pressure</span>
                    </p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="widget d-flex p-3">
                    <i className="wi wi-strong-wind"></i>
                    <p>
                      {speed}<span>Speed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>        
    </>
  )
}

export default Weathercard