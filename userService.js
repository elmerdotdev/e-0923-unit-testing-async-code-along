// API to call user details
class UserApiService {
  async fetchUserDetails() {
    const response = await fetch('https://api.example.com/user')
    const userDetails = await response.json()
    return userDetails
  }
}

module.exports = UserApiService