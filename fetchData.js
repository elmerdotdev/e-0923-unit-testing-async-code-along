function fetchDataCallback(callback) { // async function with callback
  setTimeout(() => {
    callback('hello world!')
  }, 1000)
}

function fetchDataPromise() { // async function with promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('peanut butter')
    }, 1000)
  })
}

async function fetchDataAsyncAwait() { // async function with promise
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('strawberry jam')
    }, 2000)
  })
}

module.exports = [
  fetchDataCallback,
  fetchDataPromise,
  fetchDataAsyncAwait
]