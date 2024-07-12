 /*function getWeather(){
    const apiKey = 'c762940001c8a55ff4eea581fb1f9c26';
    const city = document.getElementById('city').value;

    if(!city){
        alert('Please enter a city');
        return;
    }
 
    const currentweatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentweatherUrl).then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {console.error('Error fetching current weather data:', error);
        alert('Error fetching current weather data. Please try again.');
    });
    
    fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        displayHourlyForecast(data.list);
    })
    .catch(error => {console.error('Error fetching hourly forecast data:', error);
        alert('Error fetching current forecast data. Please try again.');
    });
}
function displayWeather(data){
    const tempDivInfo = document.getElementById('temp--div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    //Clear previous content
    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if(data.cod === '404'){
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else{
        const cityName = data.name;
        const temperature = Math.round(data.main.temp -273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const temperatureHTML = `<p>${temperature}°C</p>`;
        const weatherHTML = `<p>${cityName}</p>
        <p>${description}</p>`;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();

    }

}

function displayHourlyForecast(hourlyData){
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    const next24Hours = hourlyData.slice(0,8);
    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt *1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHTML = `<div class = "hourly-item"><span>${hour}:00</span>
        <img src= "${iconUrl}" alt="Hourly Weather Icon"><span>${temperature}°C</span>
        </div>`;
        hourlyForecastDiv.innerHTML += hourlyItemHTML;
    });
    
}
function showImage(){
    const weatherIcon = document.getElementById('weather-info');
    weatherIcon.style.display = 'block';
} */
    function getWeather() {
        const apiKey = 'c762940001c8a55ff4eea581fb1f9c26';
        const city = document.getElementById('city').value;
    
        if (!city) {
            alert('Please enter a city');
            return;
        }
    
        const currentweatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    
        fetch(currentweatherUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === '404') {
                    alert('City not found');
                    return;
                }
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching current weather data:', error);
                alert('Error fetching current weather data. Please try again.');
            });
    
        fetch(forecastUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === '404') {
                    alert('City not found');
                    return;
                }
                displayHourlyForecast(data.list);
            })
            .catch(error => {
                console.error('Error fetching hourly forecast data:', error);
                alert('Error fetching forecast data. Please try again.');
            });
    }
    
    function displayWeather(data) {
        const tempDivInfo = document.getElementById('temp--div');
        const weatherInfoDiv = document.getElementById('weather-info');
        const weatherIcon = document.getElementById('weather-icon');
        const hourlyForecastDiv = document.getElementById('hourly-forecast');
    
        // Clear previous content
        weatherInfoDiv.innerHTML = '';
        hourlyForecastDiv.innerHTML = '';
        tempDivInfo.innerHTML = '';
    
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    
        const temperatureHTML = `<p>${temperature}°C</p>`;
        const weatherHTML = `<p>${cityName}</p><p>${description}</p>`;
    
        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;
    
        showImage();
    }
    
    function displayHourlyForecast(hourlyData) {
        const hourlyForecastDiv = document.getElementById('hourly-forecast');
        const next24Hours = hourlyData.slice(0, 8);
        next24Hours.forEach(item => {
            const dateTime = new Date(item.dt * 1000);
            const hour = dateTime.getHours();
            const temperature = Math.round(item.main.temp - 273.15);
            const iconCode = item.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    
            const hourlyItemHTML = `<div class="hourly-item"><span>${hour}:00</span><img src="${iconUrl}" alt="Hourly Weather Icon"><span>${temperature}°C</span></div>`;
            hourlyForecastDiv.innerHTML += hourlyItemHTML;
        });
    }
    
    function showImage() {
        const weatherIcon = document.getElementById('weather-info');
        weatherIcon.style.display = 'block';
    }
    
