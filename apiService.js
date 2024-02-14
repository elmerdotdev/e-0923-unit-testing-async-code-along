class ApiService {
  async fetchDataFromApi() { // actual working api function
    const response = await fetch('https://fakeapiexample.com/todos');
    const data = await response.json()
    return data
  }
}

module.exports = ApiService