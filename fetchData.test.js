const [ 
  fetchDataCallback,
  fetchDataPromise,
  fetchDataAsyncAwait
] = require('./fetchData')

// callback test case
test('the data is hello world', (done) => {
  function callback(data) {
    expect(data).toBe('hello world!')
    done()
  }
  fetchDataCallback(callback)
})

// promise test case
test('the response is peanut butter', () => {
  return fetchDataPromise().then(response => {
    expect(response).toBe('peanut butter')
  })
})

// promise test case with async await
test('the response is strawberry jam', async () => {
  const response = await fetchDataAsyncAwait()
  expect(response).toBe('strawberry jam')
})

// resolves test case (similar to then-catch and async/await)
test('the response is strawberry jam', () => {
  return expect(fetchDataAsyncAwait()).resolves.toBe('strawberry jam')
})