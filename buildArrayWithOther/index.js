const data = require('./data/index')
const TreeStructure = require('./class')

const props = {
  treeData: data,
  structure: {
    _id: 'id',
    name: 'name',
    icon: 'parentId',
    parentId: 'parentId',
    children: 'children',
  }
}

const newChild = {
  id: '1234---mambo--number---5',
  name: 'Un buen mambito',
  icon: 'fa-s',
  parentId: 'c8aff606-1e30-4190-950e-05be6ad1b6ec'
}

let TreeStr = new TreeStructure(props);
let x = TreeStr.getTreeData()
let mappedChild = TreeStr.mapNode(newChild);
// let newTree = TreeStr.appendChildToFather(x,mappedChild)
// console.log('new Tree', JSON.stringify(x, undefined, 2))
// console.log('new Node', JSON.stringify(mappedChild, undefined, 2))
console.log('tree with append', JSON.stringify(TreeStr.appendChildToFather(x, mappedChild), undefined, 2))
// console.log('tree with append 2', JSON.stringify(TreeStr.appendChild(mappedChild), undefined, 2))
