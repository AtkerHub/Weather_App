import { useState, useEffect } from "react";

import CurrentWeather from './CurrentWeather';
import DailyWeather from './DailyWeather';
import { getWeatherBackground } from "../utilities";

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

            if(currentData?.current?.weather_code !== undefined) {
                const bgGradient = getWeatherBackground(currentData.current.weather_code)

                document.body.style.background = bgGradient
            }



            const daily = await fetch (
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant,weathercode&timezone=auto`
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

    if(!currentWeather?.current || !dailyWeather?.daily) {
        return <div>Error loading weather data. Please try again.</div>
    }

    return (
        <div id="weather">
            <div className="head-line">
                <div className="city-name">
                    {city}
                </div>
            </div>
        
        <CurrentWeather data={currentWeather.current} />

        <div className="daily-wrapper">
            {
                dailyWeather.daily.time.map((day, key) => (
                    <DailyWeather
                     key = {key}
                     date = {day}
                     maxTemp={dailyWeather.daily.temperature_2m_max[key]}
                     minTemp={dailyWeather.daily.temperature_2m_min[key]}
                     windSpeed={dailyWeather.daily.windspeed_10m_max[key]}
                     windDirection={dailyWeather.daily.winddirection_10m_dominant[key]}
                     weatherCode={dailyWeather.daily.weathercode[key]}
                    ></DailyWeather>
                    )   )
            }
        </div>

        </div>
    )
}

export default Weather