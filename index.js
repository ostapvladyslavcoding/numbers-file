const fs = require('node:fs')

const sortCompare = (a, b) => {
  return a < b ? -1 : 1
}

const getMax = (arr) => {
  return arr.reduce((max, curr) => {
    return max >= curr ? max : curr
  }, -Infinity)
}

const getMin = (arr) => {
  return arr.reduce((min, curr) => {
    return min <= curr ? min : curr
  }, +Infinity)
}

const getMedian = (sortArr) => {
  const length = sortArr.length
  if (length % 2 !== 0) return sortArr[(length - 1) / 2]
  return 0.5 * (sortArr[length / 2 - 1] + sortArr[length / 2])
}

const getAverage = (arr) => {
  return arr.reduce((a, b) => a + b) / arr.length
}

const getIncreasing = (arr) => {
  let maxLength = 0
  let maxIndex = 0
  let currLength = 1
  let startIndex = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currLength++
      if (currLength > maxLength) {
        maxLength = currLength
        maxIndex = startIndex
      }
    } else {
      currLength = 1
      startIndex = i
    }
  }

  return arr.slice(maxIndex, maxIndex + maxLength)
}

const getDecreasing = (arr) => {
  let maxLength = 0
  let maxIndex = 0
  let currLength = 1
  let startIndex = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      currLength++
      if (currLength > maxLength) {
        maxLength = currLength
        maxIndex = startIndex
      }
    } else {
      currLength = 1
      startIndex = i
    }
  }

  return arr.slice(maxIndex, maxIndex + maxLength)
}

fs.readFile('./10m.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const newData = data.split('\n').map(Number)
  const sortedData = [...newData].sort(sortCompare)

  const minValue = getMin(newData)
  const maxValue = getMax(newData)
  const medianValue = getMedian(sortedData)
  const averageValue = getAverage(newData)
  const incValues = getIncreasing(newData)
  const decValues = getDecreasing(newData)

  console.log(`Minimal value is ${minValue}`)
  console.log(`Maximum value is ${maxValue}`)
  console.log(`Median value is ${medianValue}`)
  console.log(`Average value is ${averageValue}`)
  console.log(`Longest Increasing sequence is ${incValues}`)
  console.log(`Longest Decreasing sequence is ${decValues}`)
})
