const Ingredients = require('../ingredients/ingredients');

class PotionCombinator {

  /**
   * 
   * @param {
   *   A,
   *   B,
   *   C,
   *   D,
   *   E,
   *   goalMaginins
   * } goalPotion 
   * @param {
   *   maxIngredient,
   *   maxMagimins 
   * } cauldron
   */
  getCombinationIngredients(goalPotion, cauldron) {
    const relevantIngredients = this.getRelevantIngredients(goalPotion);  
    let currentCombination = Array(cauldron.maxIngredient);
    let ingredientsName = Object.keys(relevantIngredients);
    let possibleCombinations = []

    ingredientsName.forEach((e, i) => {
      currentCombination[0] = relevantIngredients[ingredientsName[i]]
      ingredientsName.forEach((e, i) => {
        currentCombination[1] = relevantIngredients[ingredientsName[i]]
        if(this.makeCombo(goalPotion, currentCombination)) { 
          possibleCombinations.push(currentCombination);
        }
      })
    })
    return possibleCombinations;
  }

  getRelevantIngredients(goalPotion) {
    let relevantValues = []
    Object.keys(goalPotion).forEach((e) => {
      if((e == 'A' || e == 'B' || e == 'C' || e == 'D' || e == 'E') && parseInt(goalPotion[e]) > 0) {
        relevantValues.push(e)
      }
    });
    return Ingredients.getOnlyIngredientsWith(relevantValues);
  }

  makeCombo(goal, ingredients) {
    let finalPotion = {
      A:0,
      B:0,
      C:0,
      D:0,
      E:0,
      totalMagimins:0
    };
    ingredients.forEach((e) => {
      finalPotion.A += e.A
      finalPotion.B += e.B
      finalPotion.C += e.C
      finalPotion.D += e.D
      finalPotion.E += e.E
      finalPotion.totalMagimins += e.A + e.B + e.C + e.D + e.E
    });
    return JSON.stringify(finalPotion) == JSON.stringify(goal)
  }

}

var potionCombinator = new PotionCombinator();

module.exports = potionCombinator;