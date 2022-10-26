ingredientList = {
  feyberry : {
    name: 'Feyberry',
    a:6,
    b:0,
    c:0,
    d:0,
    e:0,
    totalMagimins: 6,
    pallate:'neutral',
    stomach:'neutral',
    smell:'neutral',
    look:'neutral',
    hear:'neutral',
    area:'enchanted_forest',
    img:'feyberry.png'
  },
  impstool_mushroom:{
    name: 'Impstool Mushroom',
    a:0,
    b:4,
    c:0,
    d:0,
    e:0,
    totalMagimins: 4,
    pallate:'neutral',
    stomach:'good',
    smell:'neutral',
    look:'neutral',
    hear:'neutral',
    area:'enchanted_forest',
    img:'impstool_mushroom.png'
  },
  kappa_pheromones:{
    name: 'Kappa Pheromones',
    a:4,
    b:0,
    c:4,
    d:0,
    e:0,
    totalMagimins: 8,
    pallate:'neutral',
    stomach:'neutral',
    smell:'neutral',
    look:'neutral',
    hear:'neutral',
    area:'enchanted_forest',
    img:'kappa_pheromones.png'
  },
  mandrake_root:{
    name: 'Mandrake Root',
    a:0,
    b:6,
    c:0,
    d:0,
    e:0,
    totalMagimins: 6,
    pallate:'neutral',
    stomach:'neutral',
    smell:'neutral',
    look:'neutral',
    hear:'neutral',
    area:'enchanted_forest',
    img:'mandrake_root.png'
  }
}


class Ingredients {
  
  getIngredients(filter) {
    if(!filter){
      return ingredientList;
    }
  }

}

var ing = new Ingredients();

module.exports = ing;


// feyberry:{
//   name: '',
//   a:0,
//   b:0,
//   c:0,
//   d:0,
//   e:0,
//   totalMagimins: 6,
//   trait1:'neutral',
//   trait2:'neutral',
//   trait3:'neutral',
//   trait4:'neutral',
//   trait5:'neutral'
// }