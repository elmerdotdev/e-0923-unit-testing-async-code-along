// API to call weather info
class WeatherApiService {
  async fetchWeather() {
    const response = await fetch('https://api.example.com/weather')
    const weather = await response.json()
    return weather
  }
}

module.exports = WeatherApiService