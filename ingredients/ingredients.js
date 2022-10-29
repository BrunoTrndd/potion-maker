ingredientList = {
  feyberry : {
    name: 'Feyberry',
    A:6,
    B:0,
    C:0,
    D:0,
    E:0,
    totalMagimins: 6,
    price:4,
    pallate:'neutral',
    stomach:'neutral',
    smell:'neutral',
    look:'neutral',
    hear:'neutral',
    areA:'enchanted_forest',
    img:'feyberry.png'
  },
  impstool_mushroom:{
    name: 'Impstool Mushroom',
    A:0,
    B:4,
    C:0,
    D:0,
    E:0,
    totalMagimins: 4,
    price:17,
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
    A:4,
    B:0,
    C:4,
    D:0,
    E:0,
    totalMagimins: 8,
    price:13,
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
    A:0,
    B:6,
    C:0,
    D:0,
    E:0,
    totalMagimins: 6,
    price:4,
    pallate:'neutral',
    stomach:'neutral',
    smell:'neutral',
    look:'neutral',
    hear:'neutral',
    area:'enchanted_forest',
    img:'mandrake_root.png'
  },
  pixiedust_diamond:{
    name: 'Pixiedust Diamond',
    A:0,
    B:4,
    C:4,
    D:0,
    E:0,
    totalMagimins: 8,
    price:14,
    pallate:'neutral',
    stomach:'neutral',
    smell:'neutral',
    look:'neutral',
    hear:'neutral',
    area:'enchanted_forest',
    img:'pixiedust_diamond.png'
  },
  river_calamari:{
    name: 'River Calamari',
    A:8,
    B:0,
    C:0,
    D:0,
    E:0,
    totalMagimins: 8,
    price:5,
    pallate:'neutral',
    stomach:'bad',
    smell:'neutral',
    look:'neutral',
    hear:'neutral',
    area:'enchanted_forest',
    img:'river_calamari.png'
  },
  river_pixies_shell:{
    name: 'River-Pixies Shell',
    A:4,
    B:4,
    C:0,
    D:0,
    E:0,
    totalMagimins: 8,
    price:11,
    pallate:'neutral',
    stomach:'neutral',
    smell:'neutral',
    look:'neutral',
    hear:'neutral',
    area:'enchanted_forest',
    img:'river_pixies_shell.png'
  },
  rotfly_larva:{
    name: 'Rotfly Larva',
    A:0,
    B:0,
    C:4,
    D:0,
    E:0,
    totalMagimins: 4,
    price:10,
    pallate:'good',
    stomach:'neutral',
    smell:'neutral',
    look:'neutral',
    hear:'neutral',
    area:'enchanted_forest',
    img:'rotfly_larva.png'
  },
  sack_of_slime:{
    name: 'Sack Of Slime',
    A:0,
    B:0,
    C:6,
    D:0,
    E:0,
    totalMagimins: 6,
    price:7,
    pallate:'neutral',
    stomach:'neutral',
    smell:'neutral',
    look:'neutral',
    hear:'neutral',
    area:'enchanted_forest',
    img:'sack_of_slime.png'
  }
}


class Ingredients {
  
  getIngredients(filter) {
    var activeFilters = [];
    let anyMatch = false;
    Object.keys(filter).map((index) => {
      if(filter[index] !== '0' && filter[index] !== 'neutral') {
        activeFilters[index] = filter[index];
        anyMatch = true;
      }
    });
    if(!anyMatch){
      return ingredientList;
    }
    let filteredList = {};
    
    Object.keys(ingredientList).map((index) => {
      let match = false;
      let ingredient = ingredientList[index]
      Object.keys(activeFilters).map((e) => {
        match = ingredient[e] == activeFilters[e]
      });
      if(match) {
        filteredList[index] = ingredient
      }
    });
    return filteredList;
  }


  getOnlyIngredientsWith(values) {
    let filteredList = [];
    Object.keys(ingredientList).forEach((ingredientName,i)=>{
      let match = false;
      values.forEach((value)=>{
        if(!match)
          match = ingredientList[ingredientName][value] > 0;
      }); 
      if(match)
        filteredList.push(ingredientList[ingredientName])
    });
    return filteredList;
  }

}

var ing = new Ingredients();

module.exports = ing;


// feyberry:{
//   name: '',
//   a:0,
//   B:0,
//   C:0,
//   D:0,
//   e:0,
//   totalMagimins: 6,
//   trait1:'neutral',
//   trait2:'neutral',
//   trait3:'neutral',
//   trait4:'neutral',
//   trait5:'neutral'
// }