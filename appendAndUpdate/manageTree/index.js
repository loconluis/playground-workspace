const appendChildToFather = (treeData, newChild) => {
  // console.log(treeData);
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

const updateChild = (treeData, update) => {
  for (let value in treeData) {
    console.log('update id', update.id);
    console.log('treeData[value].id', treeData[value].id);
    const idMatch = treeData[value].id.includes(update.id);
    console.log('idMatch', idMatch);
    if (idMatch) {
      treeData[value] = {...update};
      console.log('after if', treeData[value])
    } else {
      treeData[value].children = updateChild(treeData[value].children, update)
    }
  }
  return treeData;
}

module.exports = { appendChildToFather, updateChild }