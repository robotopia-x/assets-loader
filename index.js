/* global Image */

const store = {}

function load (images) {
  const loadingImages = Object.keys(images).map((id) => {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.src = images[id]
      image.onload = () => resolve({ id, file: image })
      image.onerror = (error) => reject(error)
    })
  })

  return Promise.all(loadingImages)
    .then((images) => {
      images.forEach(({ id, file }) => {
        store[id] = file
      })
    })
}

module.exports = {
  load,
  store
}
