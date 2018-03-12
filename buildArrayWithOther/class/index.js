class TreeStructure {
  constructor (structure = {}, labelAttr="name", childrenAttr="children", idAttr="_id") {
    this.structure=structure;
    this.labelAttr=labelAttr;
    this.childrenAttr=childrenAttr;
  }

  mapTree (treeData) {
    return treeData.map((node, i) => {
      let temp = this.mapNode(node);
      console.log('im temp', temp) 
      temp[this.childrenAttr] = this.mapTree(temp[this.childrenAttr])
      console.log('im temp 2', temp)
      return temp;
    })
  }
  
  mapNode (node) {
    var result = {};
    Object.keys(this.structure).map((value) => {
      result[value]=eval(`node.${this.structure[value]}`)
      console.log('evalValue', eval(`node.${this.structure[value]}`))
    })
    return result;
  }

}

module.exports = TreeStructure;
