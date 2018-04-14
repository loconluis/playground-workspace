const data = require('./data')
const _ = require('lodash')

// Receive data and normalize
const convert2Group = (optionsData, labelKey, valueKey, groupProp) => {
  // Im using lodash to help to return no duplicate data
  let arrOption = _.uniq(optionsData.map(node => node[groupProp]))
  // Now I set a structure to the JSON that I need
  const optionsGroup = arrOption.map((node, i) => ({ label: node, options: [] }));
  // Im each the principal data looking for the data 
  optionsData.forEach(element => {
    // helper to create a push
    let x = optionsGroup.find(node => node.label === element[groupProp]);
    // push the data to the group to correspond,
    x.options.push({ label: element[labelKey], value: element[valueKey] });
  });
  // returning the new array
  return optionsGroup
}
// The try!
console.log('lowudjw', JSON.stringify(convert2Group(data, 'name', 'process', 'group'), undefined, 2));