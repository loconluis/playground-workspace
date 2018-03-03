// this only return a one node with data;
let newArr=[]
let getElements = (treeData, text) => {
  treeData.map(nodo => {
    const textMatch = nodo.name.toLowerCase().includes(text.toLowerCase())
    if (textMatch) {
      console.log('---HICE MATCH---');
      newArr.push(nodo)
    } else {
      if (nodo.children) {
        return getElements(nodo.children, text)
      }
    }
  })
  return newArr;
}


// Return all the path to the node match with text
let find = (node, text) => {
  const textMatch = node.name.toLowerCase().includes(text.toLowerCase());
  if (textMatch) {

    return node;
  } else if (node.children) {
    let newChildren = [];
    for (let value in node.children) {
      let aux = find(node.children[value], text);
      if (aux !== null) {
        newChildren.push(aux);
      }
    }
    if (newChildren.length > 0) {
      let auxNodo = node;
      auxNodo.children = newChildren;
      return auxNodo;
    }
  }
  return null;
}

module.exports = { getElements, find }