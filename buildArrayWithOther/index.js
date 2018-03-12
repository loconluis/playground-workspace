const data = require('./data/index')
const TreeStructure = require('./class')

const laStructure = {
  hola: 'name',
  _id: 'id',
  icon: 'parentId',
  children: 'children',
}

let TreeStr = new TreeStructure(laStructure, "hola");
let x = TreeStr.mapTree(data)
console.log('strc console', JSON.stringify(x, undefined, 2))
