# wireframe
Create a wireframe from a simplical complex without duplicate edges.

## Why
[gl-wireframe](https://github.com/hughsk/gl-wireframe) is faster and more memory efficient, but includes duplicate edges.

## Example
```javascript
var bunny = require('bunny')
var glWireframe = require('gl-wireframe')
var wireframe = require('./')

console.log(
  glWireframe(bunny.cells).length, // => 22044
  wireframe(bunny.cells).length    // => 5511
)
```

## License
MIT
