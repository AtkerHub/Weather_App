import { useState } from 'react'

import Search from './components/Search';
import Weather from './components/Weather';

import './App.css'

function App() {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [cityName, setCityName] = useState(null);



  return (
    <div>



    </div>
  )
}

export default App
