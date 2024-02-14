const ApiService = require('./apiService')

const mockFetchDataFromApi = jest.fn(() => Promise.resolve({
  message: 'User message'
})) // mock/fake api function

jest.mock('./apiService', () => {
  return jest.fn().mockImplementation(() => {
    return { fetchDataFromApi: mockFetchDataFromApi }
  })
})

test('the data is User message', async () => {
  const api = new ApiService()
  const response = await api.fetchDataFromApi() // { message: 'User message' }
  expect(response.message).toBe('User message')
  expect(mockFetchDataFromApi).toHaveBeenCalled()
})