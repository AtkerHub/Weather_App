import { Sun, CloudDrizzle, CloudFog, CloudHail,
    CloudLightning, CloudRain, CloudSnow, CloudSun, 
    CloudSunRain, Cloudy, Snowflake, CircleAlert
 } from 'lucide-react';

export const getWeatherIcon = (weatherCode) => {
    const weatherIcons = {
        0: <Sun size={24}/>,

        1: <Sun size={24}/>,
        2: <CloudSun size={24}/>,
        3: <Cloudy size={24}/>,

        45: <CloudFog size={24}/>,
        48: <CloudFog color="blue" size={24}/>,

        51: <CloudDrizzle color="green" size={24}/>,
        53: <CloudDrizzle color="yellow" size={24}/>,
        55: <CloudDrizzle color="red" size={24}/>,

        56: <CloudDrizzle color="blue" size={24}/>,
        57: <CloudDrizzle color="darkblue" size={24}/>,

        61: <CloudRain color="green" size={24}/>,
        63: <CloudRain color="yellow" size={24}/>,
        65: <CloudRain color="red" size={24}/>,

        66: <CloudRain color="blue" size={24}/>,
        67: <CloudRain color="darkblue" size={24}/>,

        71: <Snowflake color="green" size={24}/>,
        73: <Snowflake color="yellow" size={24}/>,
        75: <Snowflake color="red" size={24}/>,

        77: <CloudSnow size={24}/>,

        80: <CloudSunRain color="green" size={24}/>,
        81: <CloudSunRain color="yellow" size={24}/>,
        82: <CloudSunRain color="red" size={24}/>,

        85: <CloudSnow color="green" size={24}/>,
        86: <CloudSnow color="red" size={24}/>,

        95: <CloudLightning size={24}/>, 

        96: <CloudHail color="red" size={24}/>, /* check */
        99: <CloudHail color="darkred" size={24}/>, /* check */
    }
    return weatherIcons[weatherCode] || CircleAlert
}

export const getWeatherDescription = (weatherCode) => {
    const weatherDescriptions = {
        0: 'Clear sky', /*Czyste niebo*/

        1: 'Mainly clear', /* Przeważnie bezchmurne */
        2: 'Partly cloudy', /*Częściowo pochmurno*/
        3: 'Overcast', /*Zachmurzenie całkowite*/

        45: 'Fog', /*Mgła*/
        48: 'Depositing rime fog', /*Osadzające się mgła sadziowa*/

        51: 'Drizzle: light', /*Mżawka lekka*/
        53: 'Drizzle: moderate', /*Mżawka umiarkowana*/
        55: 'Drizzle: dense intensity', /*Mżawka gęsta*/

        56: 'Freezing drizzle: light', /*Mżawka zamrazająca lekka*/
        57: 'Freezing drizzle: dense intensity', /*Mżawka zamrazająca lekka*/

        61: 'Rain: slight', /*deszcz słaby*/
        63: 'Rain: moderate', /*deszcze umiarkowany*/
        65: 'Rain: heavy intensity', /*deszcz mocny*/

        66: 'Freezing Rain: light', /*zamarazający deszcze lekki*/
        67: 'Freezing Rain: heavy intensity', /*zamrzający deszczy mocny*/

        71: 'Snow fall: slight', /*Opady śniegu lekkie*/
        73: 'Snow fall: moderate',
        75: 'Snow fall: heavy intensity',

        77: 'Snow grains', /*Ziarna śniegu*/

        80: 'Rain showers: slight', /*Przelotne opady lekkie*/
        81: 'Rain showers: moderate', 
        82: 'Rain showers: violent',
 
        85: 'Snow showers: slight', /*Przelotne opady śniegu*/
        86: 'Snow showers: heavy',

        95: 'Thunderstorm: slight or moderate', /*burza*/

        96: 'Thunderstorm with slight hail', /*burza z gradem*/
        99: 'Thunderstorm with heavy hail',        
    }

    return weatherDescriptions[weatherCode] || 'Unknown weather code: ${weatherCode}'
}