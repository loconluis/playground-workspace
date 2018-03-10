const yargs = require('yargs')
const data = require('./data')
const selectors = require('./selectors');


// name chang
const argv = yargs
  .option({
    search: {
      demand: false,
      alias: 's',
      describe: 'An input to search on tree',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv
//space   
// let x = selectors.find({name: 'root', children: data}, argv.search);
// if (!x) {
//   x = []
//   x.children = []
// }
const childToAppend = {
  id: '1111111111111-22222222222-333333',
  name: 'Blas Perez',
  parentId: 'f99e3632-4001-4a8e-8e34-fe99f1659196',
  children: []
}

//console.log('Array \n', JSON.stringify(x.children, undefined, 2));
console.log('trying appendToChild', JSON.stringify(selectors.appendChildToFather(data, childToAppend), undefined, 2))