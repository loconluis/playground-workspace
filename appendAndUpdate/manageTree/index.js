const appendChildToFather = (treeData, newChild) => {
  console.log(treeData);
  for (let value in treeData) {
    console.log('treeData[value]', treeData[value])
    const textMatch = treeData[value].id.includes(newChild.parentId);
    if (textMatch) {
      treeData[value].children.push(newChild);
      console.log('was finding', treeData[value]);
    } else {
      treeData[value].children = appendChildToFather(treeData[value].children, newChild);
    }
  }
  return treeData;
}

module.exports = { appendChildToFather }