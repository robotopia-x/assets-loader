# assets-loader

simple assets loader for images

```bash
npm install @robotopia/assets-loader
```

## Usage

Initially load all your images

```Javascript
const assets = require('@robotopia/assets-loader')

assets.load({
  HERO: 'path/to/hero.png',
  WATER_TILE: 'path/to/water-tile.png',
})
.then(() => { 
  // start application 
})
.catch(() => console.log('error loading assets'))
```

After all images have been loaded they can be accessed by their name 

```Javascript
assets.store.HERO // reference to hero.png
```
