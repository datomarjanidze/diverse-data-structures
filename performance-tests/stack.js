const { Stack } = require('../src')
const { memoryUsage } = require('process')

const maxSize = 40e6
const stackOne = new Stack(maxSize, Array)
const stackTwo = new Stack(maxSize, Uint8Array)
const usedMemoryInMb = []

function getUsedMemory() /*: number */ {
  return memoryUsage().rss / 1e6
}

function printUsedMemory(index /*: number */) /*: number */ {
  console.log(`${index}: Used memory: ${usedMemoryInMb[index]} MB`)
}

usedMemoryInMb[0] = getUsedMemory()
printUsedMemory(0)
console.time('Stack I time to push')
for (let i = 0; i < maxSize; i++) stackOne.push(200)
console.timeEnd('Stack I time to push')

usedMemoryInMb[1] = getUsedMemory()
printUsedMemory(1)

console.time('Stack II time to push')
for (let i = 0; i < maxSize; i++) stackTwo.push(200)
console.timeEnd('Stack II time to push')
usedMemoryInMb[2] = getUsedMemory()
printUsedMemory(2)
