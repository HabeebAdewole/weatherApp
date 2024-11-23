document.addEventListener('DOMContentLoaded', function() {
const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const countryInput = document.getElementById('countryInput');
const weatherInfo = document.getElementById('weatherInfo');

const apiKey = 'a0c8fe0aee988711d650a640c43b7dda';

weatherForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const city = cityInput.value;
    const country = countryInput.value;
    const apiUrl = `https://home.openweathermap.org/api_keys`;

    try {
        const response = await fetch(apiUrl);
        const weatherData = await response.json();

        if (weatherData.cod === 200) {
            const { name, main, weather } = weatherData;
            const { temp, humidity } = main;
            const { description } = weather[0];

            weatherInfo.innerHTML = `
                <h2>Weather in ${name}</h2>
                <p>Temperature: ${temp}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Description: ${description}</p>
            `;
        } else {
            weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = `<p>Failed to fetch weather data. Please try again later.</p>`;
    }
})
});
