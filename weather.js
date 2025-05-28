// Set API endpoint
const apiEndpoint = 'https://api.open-meteo.com/v1/forecast';                            

                                        
// Get weather data when button is clicked
document.getElementById('get-weather').addEventListener('click', () => {
  const location = document.getElementById('location').value;
  const geocodingApi = `https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`;                                                                     

                                                    
  fetch(geocodingApi)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        const latitude = data[0].lat;
        const longitude = data[0].lon;

                                              
        fetch(`${apiEndpoint}?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
          .then(response => response.json())
          .then(weatherData => {
            const currentWeather = weatherData.current_weather;
            if (currentWeather) {
              const temperature = currentWeather.temperature;
              const windspeed = currentWeather.windspeed;
              const weathercode = currentWeather.weathercode;

                                     
              document.getElementById('//nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`;

  // Fetch latitude and longitude from geocoding API
  fetch(geocodingApi)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        const latitude = data[0].lat;
        const longitude = data[0].lon;

        // Fetch weather data from weather API
        fetch(`${apiEndpoint}?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
          .then(response => response.json())
          .then(weatherData => {
            const currentWeather = weatherData.current_weather;
            if (currentWeather) {
              const temperature = currentWeather.temperature;
              const windspeed = currentWeather.windspeed;
              const weathercode = currentWeather.weathercode;

              // Display weather data
              document.getElementById('temperature').innerHTML = `Temperature: ${temperature}°C`;
              document.getElementById('wind-speed').innerHTML = `Wind speed: ${windspeed} km/h`;
              document.getElementById('weather-code').innerHTML = `Weather code: ${weathercode}`;
            } else {
              document.getElementById('weather-data').innerHTML = 'No current weather data available';
            }
          })
          .catch(error => console.error('Error fetching weather data:', error));
      } else {
        document.getElementById('weather-data').innerHTML = 'Location not found';
      }
    })
    .catch(error => console.error('Error fetching geocoding data:', error));
});
