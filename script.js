const apiKey = 'c92f497838c1ce2d54ffa3838738c162';  // Replace with your OpenWeatherMap API key
const weatherButton = document.getElementById('get-weather-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weather-description');
const humidity = document.getElementById('humidity');

weatherButton.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeather(city);
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.cod === '404') {
      alert('City not found');
    } else {
      cityName.textContent = data.name;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
    }
  } catch (error) {
    alert('Error fetching weather data');
  }
}
