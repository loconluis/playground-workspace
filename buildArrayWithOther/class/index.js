class TreeStructure {
  // constructor (structure = {}, labelAttr="name", childrenAttr="children", idAttr="_id") {
    constructor ( props = {} ) {
    // this.structure=structure;
    // this.labelAttr=labelAttr;
    // this.childrenAttr=childrenAttr;
    this.treeData = props.treeData || {}
    this.structure = props.structure || {}
    this.labelAttr = props.labelAttr || 'name'
    this.childrenAttr = props.childrenAttr || 'children'
    this.idAttr = props.idAttr || '_id'
    this.iconAttr = props.iconAttr || 'icon'
    this.treeMapData = this.getMapTree()
  }
  // build a new tree with a the new structure
  mapTree (treeData) {
    return treeData.map((node, i) => {
      let temp = this.mapNode(node);
      // console.log('im temp', temp) 
      temp[this.childrenAttr] = this.mapTree(temp[this.childrenAttr])
      // console.log('im temp 2', temp)
      return temp;
    })
  }
  // build a new node with the structure define for the Tree
  mapNode (node) {
    var result = {};
    Object.keys(this.structure).map((value) => {
      result[value]=eval(`node.${this.structure[value]}`)
      // console.log('evalValue', eval(`node.${this.structure[value]}`))
    })
    return result;
  }
  // Append the child to the tree @Node should be a mapped node
  

  getTreeData () {
    return this.treeMapData
  }
  
  getMapTree () {
    return this.mapTree(this.treeData)
  }

  appendChildToFather (treeData, newChild) {
    //console.log(treeData);
    for (let value in treeData) {
      //console.log('treeData[value]', treeData[value])
      const textMatch = treeData[value][this.idAttr].includes(newChild.parentId);
      if (textMatch) {
        treeData[value][this.childrenAttr].push(newChild);
        //console.log('was finding', treeData[value]);
      } else {
        treeData[value][this.childrenAttr] = this.appendChildToFather(treeData[value][this.childrenAttr], newChild);
      }
    }
    return treeData;
  }

  // appendChild (node) {
  //   //console.log(treeData);
  //   for (let value in this.treeMapData) {
  //     //console.log('treeData[value]', treeData[value])
  //     const textMatch = this.treeMapData[value][this.idAttr].includes(node.parentId);
  //     if (textMatch) {
  //       this.treeMapData[value][this.childrenAttr].push(node);
  //       //console.log('was finding', this.treeMapData[value]);
  //     } else {
  //       this.treeMapData[value][this.childrenAttr] = this.appendChild(this.treeMapData[value][this.childrenAttr], node);
  //     }
  //   }
  //   return this.treeMapData;
  // }
}

module.exports = TreeStructure;
