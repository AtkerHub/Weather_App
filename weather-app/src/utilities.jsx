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

        96: <CloudHail color="red" size={24}/>,
        99: <CloudHail color="darkred" size={24}/>,
    }
    return weatherIcons[weatherCode] || <CircleAlert color="red" size={24}/>
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

    return weatherDescriptions[weatherCode] || `Unknown weather code: ${weatherCode}`
}

export const getWeatherBackground = (weatherCode) => {

  const weatherBackground = {

    0: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', // Sunny - yellow to orange

    1: 'linear-gradient(135deg, #FFF8DC 0%, #FFDAB9 100%)', // Mainly clear - light yellow
    2: 'linear-gradient(135deg, #E6E6FA 0%, #D3D3D3 100%)', // Partly cloudy - lavender to gray
    3: 'linear-gradient(135deg, #A9A9A9 0%, #696969 100%)', // Overcast - dark gray

    45: 'linear-gradient(135deg, #F0F8FF 0%, #B0C4DE 100%)', // Fog - alice blue to light steel blue
    48: 'linear-gradient(135deg, #DCDCDC 0%, #A9A9A9 100%)', // Rime fog - gainsboro to dark gray

    51: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 100%)', // Drizzle light - sky blue to steel blue
    53: 'linear-gradient(135deg, #6495ED 0%, #4169E1 100%)', // Drizzle moderate - cornflower blue to royal blue
    55: 'linear-gradient(135deg, #000080 0%, #191970 100%)', // Drizzle dense - navy to midnight blue

    56: 'linear-gradient(135deg, #00CED1 0%, #20B2AA 100%)', // Freezing drizzle light - dark turquoise to light sea green
    57: 'linear-gradient(135deg, #008B8B 0%, #006400 100%)', // Freezing drizzle dense - dark cyan to dark green

    61: 'linear-gradient(135deg, #1E90FF 0%, #0000CD 100%)', // Rain slight - dodger blue to medium blue
    63: 'linear-gradient(135deg, #0000FF 0%, #00008B 100%)', // Rain moderate - blue to dark blue
    65: 'linear-gradient(135deg, #00008B 0%, #000000 100%)', // Rain heavy - dark blue to black

    66: 'linear-gradient(135deg, #00FFFF 0%, #008080 100%)', // Freezing rain light - aqua to teal
    67: 'linear-gradient(135deg, #008080 0%, #004040 100%)', // Freezing rain heavy - teal to dark teal

    71: 'linear-gradient(135deg, #FFFFFF 0%, #C0C0C0 100%)', // Snow slight - white to silver
    73: 'linear-gradient(135deg, #F5F5F5 0%, #A9A9A9 100%)', // Snow moderate - white smoke to dark gray
    75: 'linear-gradient(135deg, #808080 0%, #000000 100%)', // Snow heavy - gray to black

    77: 'linear-gradient(135deg, #FFFAFA 0%, #D3D3D3 100%)', // Snow grains - snow to light gray

    80: 'linear-gradient(135deg, #87CEFA 0%, #4682B4 100%)', // Rain showers slight - light sky blue to steel blue
    81: 'linear-gradient(135deg, #4169E1 0%, #0000CD 100%)', // Rain showers moderate - royal blue to medium blue
    82: 'linear-gradient(135deg, #0000CD 0%, #000080 100%)', // Rain showers violent - medium blue to navy

    85: 'linear-gradient(135deg, #F0FFFF 0%, #B0E0E6 100%)', // Snow showers slight - azure to powder blue
    86: 'linear-gradient(135deg, #AFEEEE 0%, #778899 100%)', // Snow showers heavy - pale turquoise to light slate gray

    95: 'linear-gradient(135deg, #272727 0%, #818181 100%)', // Thunderstorm slight - orange red to dark red

    96: 'linear-gradient(135deg, #272727 0%, #474f97ff 100%)', // Thunderstorm with hail slight - crimson to firebrick
    99: 'linear-gradient(135deg, #272727 0%, #2b4772ff 100%)'  // Thunderstorm with hail heavy - dark red to black

  };

  return weatherBackground[weatherCode] || 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' // Default

}