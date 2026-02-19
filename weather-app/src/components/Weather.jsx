import { useState, useEffect } from "react";

import CurrentWeather from './CurrentWeather';
import DailyWeather from './DailyWeather';

const Weather = ( {lat, lon, city }) => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [dailyWeather, setDailyWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            
            const current = await fetch (
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m,weather_code`
            )

            const currentData = await current.json()
            setCurrentWeather(currentData)

            const daily = await fetch (
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_direction_10m_dominant,weather_code&timezone=auto`
            )

            const dailyData = await daily.json()
            setDailyWeather(dailyData)

        } catch (error) {
            console.error("Error fetching data:", error)
        } finally {
            setLoading(false)
        }            
       }

       fetchData()
    }, [lat, lon])

    if(loading) {
        return <div>Loading...</div>
    }

    if(!currentWeather || !dailyWeather) {
        return <div>Error loading weather data. Please try again.</div>
    }

    return (
        <div id="weather">
            <div className="head-line">
                <div className="city-name">
                    {city}
                </div>
            </div>
        
        <CurrentWeather data={currentWeather} />

        <div className="daily-wrapper">
            {
                dailyWeather.time.map((day, key) => (
                    <DailyWeather
                     key = {key}
                     date = {day}
                     maxTemp={dailyWeather.temperature_2m_max[key]}
                     minTemp={dailyWeather.temperature_2m_min[key]}
                     windSpeed={dailyWeather.wind_speed_10m_max[key]}
                     windDirection={dailyWeather.wind_direction_10m_dominant[key]}
                     weathercode={dailyWeather.weather_code[key]}
                    ></DailyWeather>
                    )   )
            }
        </div>

        </div>
    )
}

export default Weather