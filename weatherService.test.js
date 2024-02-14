const WeatherApiService = require('./weatherService')

// Mock functions
const mockFetchWeather = jest.fn(() => Promise.resolve({ condition: 'Sunny' }))

// Mock implementation
jest.mock('./weatherService', () => {
  return jest.fn().mockImplementation(() => {
    return { fetchWeather: mockFetchWeather }
  })
})

// Test cases
// to check if condition is Sunny
test('the weather condition is Sunny', async () => {
  const weatherApiService = new WeatherApiService()
  const weather = await weatherApiService.fetchWeather()
  expect(weather.condition).toBe('Sunny')
  expect(mockFetchWeather).toHaveBeenCalled()
})
