export function shuffle (source) {
  const arr = source.slice()
  for (let i = 0; i < source.length; i++) {
    const j = getrandomInt(i)
    swap(arr, i, j)
  }
  return arr
}

function getrandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}
function swap(arr, i, j) {
  const n = arr[i]
  arr[i] = arr[j]
  arr[j] = n
}
export function formatTime(interval) {
  interval = interval | 0
  const minute = ((interval / 60 | 0) + '').padStart(2, '0')
  const second = (interval % 60 + '').padStart(2, '0')
  return `${minute}:${second}`
}
