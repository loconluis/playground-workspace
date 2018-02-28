const yargs = require('yargs')
const data = require('./data')
const selectors = require('./selectors');

// name chang
const argv = yargs
  .option({
    search: {
      demand: true,
      alias: 's',
      describe: 'An input to search on tree',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv
//space
let x = selectors.find({name: 'root', children: data}, argv.search)
console.log('Array \n', JSON.stringify(x, undefined, 2));