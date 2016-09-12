var bunny = require('bunny')
var glWireframe = require('gl-wireframe')
var wireframe = require('./')

console.log(
  glWireframe(bunny.cells).length, // => 22044
  wireframe(bunny.cells).length    // => 5511
)
