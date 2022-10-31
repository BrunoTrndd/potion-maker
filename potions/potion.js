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
          this.addCombination(possibleCombinations, currentCombination)
        }
        ingredientsName.forEach((e, i) => {
          currentCombination[2] = relevantIngredients[ingredientsName[i]]
          if(this.makeCombo(goalPotion, currentCombination)) { 
            this.addCombination(possibleCombinations, currentCombination)
          }
          ingredientsName.forEach((e, i) => {
            currentCombination[3] = relevantIngredients[ingredientsName[i]]
            if(this.makeCombo(goalPotion, currentCombination)) { 
              this.addCombination(possibleCombinations, currentCombination)
            }
            ingredientsName.forEach((e, i) => {
              currentCombination[4] = relevantIngredients[ingredientsName[i]]
              if(this.makeCombo(goalPotion, currentCombination)) { 
                this.addCombination(possibleCombinations, currentCombination)
              }
              ingredientsName.forEach((e, i) => {
                currentCombination[5] = relevantIngredients[ingredientsName[i]]
                if(this.makeCombo(goalPotion, currentCombination)) { 
                  this.addCombination(possibleCombinations, currentCombination)
                }
                ingredientsName.forEach((e, i) => {
                  currentCombination[6] = relevantIngredients[ingredientsName[i]]
                  if(this.makeCombo(goalPotion, currentCombination)) { 
                    this.addCombination(possibleCombinations, currentCombination)
                  }
                  currentCombination.pop();
                })
                currentCombination.pop();
              })
              currentCombination.pop();
            })
            currentCombination.pop();
          })
          currentCombination.pop();
        })
        currentCombination.pop();
      })
    })

    return possibleCombinations;
  }

  addCombination(possibleCombinations, currentCombination) {
    let comb = [...currentCombination];
    comb.sort((a,b)=>(a['name'] < b['name']) ? 1 : -1);
    if(possibleCombinations.length == 0) {
      possibleCombinations.push(comb)
    }
    let alreadyIn = false
    possibleCombinations.forEach((e) => {
      if(alreadyIn)
        return
      alreadyIn = this.arraysEqual(comb, e)
    });
    if(alreadyIn)
      return
    possibleCombinations.push(comb)
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

// console.log(potionCombinator.getCombinationIngredients({A:18, B:18, C:0, D:0, E:0, totalMagimins: 36}, {maxIngredient:7, maxMagimins:140}))

module.exports = potionCombinator;