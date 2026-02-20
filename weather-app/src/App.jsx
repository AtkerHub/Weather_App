import { useState } from 'react'
import Search from './components/Search'
import Weather from './components//Weather'

import './App.css'

function App() {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [cityName, setCityName] = useState(null)
  
  const [isSearchVisible, setIsSearchVisible] = useState(true)

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible)

    document.body.style.background = ''
  }

  const locationSelected = (lat, lon, city) => {
    setLatitude(lat)
    setLongitude(lon)
    setCityName(city)
  
   if(isSearchVisible) { toggleSearch() }
  };

  return (
    <div className="container">
      <header>
        <h2>Weather App</h2>
      </header>

      <main>
        {isSearchVisible ? (
          <Search locationSelected={locationSelected} />
        ) : (
          <div className="weather-view">            
            <Weather 
              lat={latitude} 
              lon={longitude} 
              city={cityName} 
            />

            <button 
              onClick={toggleSearch} 
              className="back-btn"
            >
              See another location
            </button>            
          </div>
        )}
      </main>
    </div>
  );
}

export default App;