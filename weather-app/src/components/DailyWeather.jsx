import { Wind, Compass, ArrowUp, ArrowDown } from 'lucide-react';
import { getWeatherIcon, getWeatherDescription } from '../utilities';

const DailyWeather = ({ date, maxTemp, minTemp, windSpeed, windDirection, weatherCode }) => {
    
    const formatShortDate = (fullDate) => {
        const parts = fullDate.split('-');
        if (parts.length === 3) {
            return `${parts[1]}-${parts[2]}`;
        }
        return fullDate;
    };

    return (
        <div className="next-day">
            <div className="day-card">
                <div className="icon-small" title={getWeatherDescription(weatherCode)}>
                    {getWeatherIcon(weatherCode)}
                </div>
                <div className="date-time-small">
                    {formatShortDate(date)}
                </div>
            </div>
            
            <div className="detail-icon">
                <ArrowUp size={16} color="red" />
                {maxTemp}°C
            </div>
            
            <div className="detail-icon">
                <ArrowDown size={16} color="blue" />
                {minTemp}°C
            </div>
            
            <div className="detail-icon">
                <Wind size={16} />
                {windSpeed} km/h
            </div>
            
            <div className="detail-icon">
                <Compass size={16} />
                {windDirection}°
            </div>
        </div>
    );
}

export default DailyWeather