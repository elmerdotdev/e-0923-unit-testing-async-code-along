const UserApiService = require('./userService')

// Mock functions
const mockFetchUserDetails = jest.fn(() => Promise.resolve({ name: 'John Smith' }))

// Mock implementation
jest.mock('./userService', () => {
  return jest.fn().mockImplementation(() => {
    return { fetchUserDetails: mockFetchUserDetails }
  })
})

// Test cases
// to check if user name is John Smith
test('the user name is John Smith', async () => {
  const userAppService = new UserApiService()
  const userDetails = await userAppService.fetchUserDetails()
  expect(userDetails.name).toBe('John Smith')
  expect(mockFetchUserDetails).toHaveBeenCalled()
})
