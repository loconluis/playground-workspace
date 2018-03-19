const data = require('./data')
const selector = require('./manageTree');

// new child
const newChild = {
  id: '1111111111111-22222222222-333333',
  name: 'Blas Perez',
  parentId: 'a4019b9d-8816-4803-a3c8-bb927e267684',
  children: []
};

const updateChild = {
  id: '5141b464-d522-42d3-9abb-4a9a1a219487',
  name: 'Sahir El buen Hombre',
  parentId: 'a4019b9d-8816-4803-a3c8-bb927e267684',
  children: []
};


//const y = selector.appendChildToFather(data, newChild);
//console.log('new array', JSON.stringify(y, undefined, 2))
const z = selector.updateChild(data, updateChild)
console.log('new array', JSON.stringify(z, undefined, 2))