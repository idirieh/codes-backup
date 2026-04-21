const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('search');
const temp = document.getElementById('temperature');
const city = document.querySelector('.city');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const weatherIcon = document.getElementById('icon');



// axios.get(url).then((data) => console.log(data))

searchBtn.addEventListener('click', () => {
    const cityToSearch = cityName.value;
    getTheWeather(cityToSearch);
    cityName.value = "";
});
cityName.addEventListener('keypress', function(event) {
    // Check if the pressed key is 'Enter' (key code 13 or event.key === 'Enter')
    if (event.key === 'Enter') {
        // // Prevent the default action (e.g., form submission if inside a form)
        // event.preventDefault();
        // // Programmatically click the button
        searchBtn.click();
    }
});

function getTheWeather(cityToSearch) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&units=metric&appid=76b8ac0026ad009e467540e5e4f4a7aa`;

    axios.get(url)
    .then((response) => {
        const tempNum = Math.trunc(response.data.main.temp);
        const data = response.data;
        //console.log(response)
        temp.textContent = tempNum;
        city.textContent = data.name;
        wind.textContent = data.wind.speed;
        humidity.textContent = data.main.humidity;

        let weatherCondition = data.weather[0].main;

        switch (weatherCondition) {
            case 'Clear':
                weatherIcon.src = "./Assets/images/clear.png";
                break;
            case 'Clouds':
                weatherIcon.src = "./Assets/images/clouds.png";
                break;
            case 'Rain':
                weatherIcon.src = "./Assets/images/rain.png";
                break;
            case 'Drizzle':
                weatherIcon.src = "./Assets/images/drizzle.png";
                break;
            case 'Mist':
                weatherIcon.src = "./Assets/images/mist.png";
                break;
            case 'Snow':
                weatherIcon.src = "./Assets/images/snow.png";
                break;
        
            default:
                break;
        }
    })
    .catch((error) => {
        window.alert('Error: The city not available', error);
    })
}