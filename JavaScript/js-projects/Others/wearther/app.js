const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('search');
const city = document.querySelector('.city');


// // const searchBtn = document.getElementById('')

//    async function getCityName(latitude, longitude, apiKey) {
//        const reverseGeocodingUrl = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`;

//        try {
//            const response = await fetch(reverseGeocodingUrl);
//            const data = await response.json();

//            if (data.features && data.features.length > 0) {
//                const city = data.features[0].properties.city;
//                return city;
//            } else {
//                return "City not found";
//            }
//        } catch (error) {
//            console.error("Error fetching city:", error);
//            return "Error";
//        }
//    }

//    // Example usage:
//    const latitude = 34.0522;
//    const longitude = -118.2437;
//    const apiKey = 'YOUR_GEOAPIFY_API_KEY'; // Replace with your API key

//    getCityName(latitude, longitude, apiKey)
//        .then(cityName => console.log("City:", cityName));

async function getCoordinatesFromCityName(cityName) {
    // Encode the city name to handle spaces and special characters
    const encodedCityName = encodeURIComponent(cityName);
    
    // Construct the Geocoding API URL
    // The 'text' parameter is used for free-form address search
    const geocodingUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodedCityName}&apiKey=488f6f7bfbb74b8cb573df5128b73681`;

    try {
        const response = await fetch(geocodingUrl);
        const data = await response.json();

        if (data.features && data.features.length > 0) {
            // The first feature in the results is usually the most relevant
            const firstResult = data.features[0].properties;
            const latitude = firstResult.lat;
            const longitude = firstResult.lon;            
            
            return { latitude, longitude, formattedAddress: firstResult.formatted };
        } else {
            return "Coordinates not found for this city";
        }
    } catch (error) {
        window.alert("Error fetching coordinates:", error);
        console.error("Error fetching coordinates:", error);
        return "Error";
    }
}

// Example usage:
// const cityToSearch = 'brasilia'; 



searchBtn.addEventListener('click', () => {  
    let cityToSearch = cityName.value  
    getCoordinatesFromCityName(cityToSearch)
        .then(result => {
            // console.log(`City: ${cityToSearch}`);
            // console.log(`Latitude: ${result.latitude}`);
            // console.log(`Longitude: ${result.longitude}`);
            // console.log(`Formatted Address: ${result.formattedAddress}`);
            getTheWeather(result.latitude, result.longitude)  
            city.textContent = cityToSearch            
            
    });

    city.value = ""
})

async function getTheWeather(latitude, longitude) {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,,weather_code&timezone=auto&forecast_days=1`;
   
        const response = await fetch(url);
        const data = await response.json();
        const currentTemp = data.current.temperature_2m;
        const tempUnit = data.current_units.temperature_2m;
        console.log(data)
        // city.textContent = firstResult.city
        document.getElementById('temperature').textContent = `${Math.trunc(currentTemp)}${tempUnit}`    


    } catch (error) {
        console.error("Error fetching coordinates:", error);
        return "Error";
    }
}

cityName.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        let cityToSearch = cityName.value  
        getCoordinatesFromCityName(cityToSearch)
            .then(result => {
                getTheWeather(result.latitude, result.longitude)  
                city.textContent = cityToSearch  
        });
    }
});


window.onload = (event) => {
    let cityToSearch = 'Riyadh'
    getCoordinatesFromCityName(cityToSearch)
    .then(result => {
        getTheWeather(result.latitude, result.longitude)  
        city.textContent = cityToSearch  
    });
    city.value = ""
};

