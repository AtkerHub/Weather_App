import { useState, useRef } from "react";

const Search = ( { locationSelected }) => {
    const locationInput = useRef(null)
    const [location, setLocation] = useState("")

    const getLocation = async () => {
        if(location == "") {
            locationInput.current.classList.add('bad-location')
            return
        }

        const geo = await fetch (
            `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=pl&format=json`
        )
        const geoData = await geo.json()

        
    }
}