const data = require('./data')
const selector = require('./manageTree');

// new child
const newChild = {
  id: '1111111111111-22222222222-333333',
  name: 'Blas Perez',
  parentId: 'a4019b9d-8816-4803-a3c8-bb927e267684',
  children: []
};



const y = selector.appendChildToFather(data, newChild);
console.log('new array', JSON.stringify(y, undefined, 2))