
const Ingredients = require('../ingredients/ingredients');

class PotionCombinator {

  possiblePotions     = [];
  relevantIngredients = [];

  /**
   * 
   * @param { A, B, C, D, E, goalMaginins } goalPotion 
   * @param { maxIngredient, maxMagimins  } cauldron
   */
  getPossibleCombinations(goalPotion, cauldron) {
    this.relevantIngredients = this.getRelevantIngredients(goalPotion);
    this.startCombination(goalPotion, cauldron);
    return this.possiblePotions;
  } 

  startCombination(goalPotion, cauldron) {
    let max = cauldron.maxIngredient
    let currentPotion = Array(max)

    while(max > 1) {
      currentPotion = Array(max);
      this.getCombinations(0, currentPotion, max, goalPotion);
      max--
    }
  }

  getCombinations(start, currentPotion, max, goal) {
    for(let i = 0; i < this.relevantIngredients.length; i++) {
      currentPotion[start] = this.relevantIngredients[i];
      if(this.ingredientsMatchWithGoal(currentPotion, goal)) {
        this.addCombination(currentPotion)
      }
      if(start != max-1) 
        start ++;
      else 
        continue;
      this.getCombinations(start, currentPotion, max, goal)
    }
  }

  addCombination(currentPotion) {
    let currentCombination  = [...currentPotion];
    currentCombination.sort((a,b)=>(a['name'] < b['name']) ? 1 : -1);

    for(let i = 0; i < this.possiblePotions.length; i++){
      if(this.arraysEqual(this.possiblePotions[i], currentCombination))
        return;
    }
    this.possiblePotions.push(currentCombination)
  }

  arraysEqual(a1, a2) {
    let isEqual = false;
    a1.forEach((e, i)=>{
      isEqual = e.name == a2[i].name
    })
    return isEqual
  }

  getRelevantIngredients(goalPotion) {
    let relevantValues = []
    Object.keys(goalPotion).forEach((e) => {
      if((e.length == 1) && parseInt(goalPotion[e]) > 0) {
        relevantValues.push(e)
      }
    });
    return Ingredients.getOnlyIngredientsWith(relevantValues);
  }

  ingredientsMatchWithGoal(ingredients, goal) {
    let currentPotion = {
      A:0,
      B:0,
      C:0,
      D:0,
      E:0,
      totalMagimins:0
    };
    ingredients.forEach((e) => {
      currentPotion.A += e.A
      currentPotion.B += e.B
      currentPotion.C += e.C
      currentPotion.D += e.D
      currentPotion.E += e.E
      currentPotion.totalMagimins += e.A + e.B + e.C + e.D + e.E
    });
    return JSON.stringify(currentPotion) == JSON.stringify(goal)
  }

}


let potionCombinator = new PotionCombinator()
// console.log(potionCombinator.getPossibleCombinations({A:12, B:12, C:0, D:0, E:0, totalMagimins: 24}, {maxIngredient:7, maxMagimins:140}))

module.exports = PotionCombinator;