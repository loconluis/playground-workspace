// Aqui deberia ir el codigo.
// Funcion que hace un map con data que se require
const data = require('./data/index')

const mappingData = (tData) => {
  return tData.map(node => {
    let aux;
    if(node.children) {
     aux = newArr(node.children)
    }
    newNode = {
      _id: node._id,
      name: node.nombre,
      company: {
        _id: node.empresa._id,
        name: node.empresa.nombre
      },
      areaType: {
        icon: node.tipoarea.icon,
        area_name: node.tipoarea.nombre,
      },
      areaParent:
        (!!node.areapadre
            ? {
                _id: node.areapadre._id,
                name:node.areapadre.name,
              }
            : null),
      orderIndex: node.orden,
      boss: {
        _id: node.jefe._id,
        persona: node.jefe.persona
      },
      constCenter: {
        _id: node.centrocosto._id,
        name: node.centrocosto.nombre,
      },
      description: node.descripcion,
      expiration: node.vencimiento,
      children: 
        (!!node.children
            ? [...newArr(node.children)]
            : undefined
        )
    }
    return newNode
  })
}

console.log('Calling a func', JSON.stringify(newArr(data), undefined, 2))