import { useState, useRef } from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = ({ locationSelected }) => {
    const locationInput = useRef(null);
    const [location, setLocation] = useState("");

    const getLocation = async () => {
        if(location == "") {
            locationInput.current.classList.add('bad-location');
            return;
        }

        try {
            const response = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`
            );
            const geoCoder = await response.json();
            
            if (geoCoder.results && geoCoder.results.length > 0) {
                const lat = geoCoder.results[0].latitude;
                const lon = geoCoder.results[0].longitude;
                const city = geoCoder.results[0].name;

                locationSelected(lat, lon, city);

                return;
            } 

            locationInput.current.classList.add('bad-location');

        } catch (err) {
            console.log(err);
            locationInput.current.classList.add('bad-location');
        }
    };

    const searchValueChanged = (e) => {
        if(locationInput.current.classList.contains('bad-location')) 
            locationInput.current.classList.remove('bad-location');

        setLocation(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            getLocation();
        }
    }

    return (
        <div className="search-location">
            <div className="search-title">Enter location:</div> 
            
            <div className="search-box" ref={locationInput}>
                <input type="text" 
                id="location" 
                placeholder="Warsaw" 
                onChange={searchValueChanged} 
                onKeyDown={handleKeyDown}
                />
                
                <div onClick={getLocation} className="search-button">
                    <SearchIcon size={20} />
                </div>
            </div>
        </div>
    );
}

export default Search;