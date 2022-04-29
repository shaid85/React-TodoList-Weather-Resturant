import React, { useState,useEffect } from 'react'
import './style.css'
import Weathercard from './weathercard'

//https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=83cabb98064141d59aa7ff4a61674b64

const Weather = () => {
    const [searchValue, setSearchValue] = useState("pune")
    const [tempInfo, setTempInfo] = useState("")

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=83cabb98064141d59aa7ff4a61674b64`

            const res = await fetch(url)
            const data = await res.json()

            const {temp, humidity, pressure} = data.main
            const {main:weathermood} = data.weather[0]
            const {name} = data
            const {speed} = data.wind
            const {country, sunset} = data.sys

            const myNewWeatherInfo = {
              temp,
              humidity,
              pressure,
              weathermood,
              name,
              speed,
              country,
              sunset,
            };

            setTempInfo(myNewWeatherInfo)
            //  console.log(temp)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getWeatherInfo()
    }, [])
    

  return (
    <>
      <div className="container py-5 ">
        <section className="sec_temp">
          <div className="search py-4 px-3 text-center d-flex">
            <input
              type="search"
              id="search"
              className="searchTerm form-control me-2" 
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="btn btn-outline-success" type="button"
            onClick={getWeatherInfo}>
              Search
            </button>
          </div>

          <Weathercard tempInfo={tempInfo}/>
        </section>
      </div>
    </>
  );
}

export default Weather