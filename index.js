module.exports = wireframe

function wireframe (cells) {
  var newcells = []
  var dedupe = {}
  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i]
    for (var n = 0; n < cell.length; n++) {
      var a = cell[n]
      var b = cell[n + 1]
      if (b === undefined) b = cell[0]
      var da = dedupe[a]
      if (da && da[b]) continue
      var db = dedupe[b]
      if (db && db[a]) continue
      if (!da) da = dedupe[a] = {}
      da[b] = true
      if (!db) db = dedupe[b] = {}
      db[a] = true
      newcells[newcells.length] = [a, b]
    }
  }
  return newcells
}
