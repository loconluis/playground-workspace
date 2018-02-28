let newArr=[]
let getElements = (treeData, text) => {
  treeData.map(nodo => {
    const textMatch = nodo.name.toLowerCase().includes(text.toLowerCase())
    if (textMatch) {
      console.log('---HICE MATCH---');
      newArr.push(nodo)
      //return nodo;
    } else {
      if (nodo.children) {
        return getElements(nodo.children, text)
      }
      //console.log('si no tiene hijos', nodo)
      //return node;
    }
  })
  return newArr;
}

module.exports = { getElements }