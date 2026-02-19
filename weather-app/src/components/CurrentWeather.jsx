import { Wind, Compass, Thermometer, Droplets } from 'lucide-react';
import { getWeatherIcon, getWeatherDescription } from '../utilities'; 

const CurrentWeather = ({ data }) => {

    const getDate = () => {
        const date = data.time.split("T");
        return date[0] + " " + date[1];
    };

    return (
        <div className="current-weather">
            <div className="main-sec">
                <div className="icon">
                    {getWeatherIcon(data.weather_code)}                    
                    <div className="weather-desc">
                        {getWeatherDescription(data.weather_code)}
                    </div>
                </div>

                <div className="temp-div">
                    <Thermometer size={20} />
                    {data.temperature_2m}°C
                </div>

                <div className="date-time">
                    {getDate()}
                </div>
            </div>
             
            <div className="details">
                <div>
                    <Wind size={20} />
                    {data.wind_speed_10m} km/h
                </div>

                <div>
                    <Compass size={20} />
                    {data.wind_direction_10m}°
                </div>

                <div>
                    <Droplets size={20} />
                    {data.relative_humidity_2m}%
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;