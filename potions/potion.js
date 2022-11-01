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
    let max = 2;
    while(max <= cauldron.maxIngredient) {
      this.startCombination(goalPotion, max);
      max++;
    }
    return this.possiblePotions;
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
    for(let i = 0; i < a1.length; i++) {
      if(a1[i].name != a2[i].name) 
        return false
    }
    return true
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

  startCombination(goalPotion, k) {
    const main = () => {
      // Generator object
      const gen = permsWithRepn(this.relevantIngredients, k);

      let
        nxt = gen.next(),
        i = 0,
        alpha = nxt.value,
        psi = alpha;
      while (!nxt.done) {
        if(i == 342) {
          let a = 1;
        }
        psi = nxt.value;
        if(this.ingredientsMatchWithGoal(psi, goalPotion))
          this.addCombination(psi)
        nxt = gen.next()
        i++
      }
    };

    function* permsWithRepn(xs, intGroup) {
        const
            vs = xs,
            intBase = vs.length,
            intSet = Math.pow(intBase, intGroup);
        if (0 < intBase) {
            let index = 0;
            while (index < intSet) {
                const
                    ds = unfoldr(
                        v => 0 < v ? (() => {
                            const rd = quotRem(v, intBase);
                            return Just(Tuple(vs[rd[1]], rd[0]))
                        })() : Nothing(),
                        index++
                    );
                yield replicate(
                    intGroup - ds.length,
                    vs[0]
                ).concat(ds);
            };
        }
    };

    const Just = x => ({
        type: 'Maybe',
        Nothing: false,
        Just: x
    });

    const Nothing = () => ({
        type: 'Maybe',
        Nothing: true,
    });

    const Tuple = (a, b) => ({
        type: 'Tuple',
        '0': a,
        '1': b,
        length: 2
    });

    const quotRem = (m, n) =>
        Tuple(Math.floor(m / n), m % n);

    const replicate = (n, x) =>
        Array.from({
            length: n
        }, () => x);

    const unfoldr = (f, v) => {
        let
            xr = [v, v],
            xs = [];
        while (true) {
            const mb = f(xr[1]);
            if (mb.Nothing) {
                return xs
            } else {
                xr = mb.Just;
                xs.push(xr[0])
            }
        }
    };
    main()
  }
  
}

var potionCombinator = new PotionCombinator();
potionCombinator.getPossibleCombinations({ A: 18, B: 0, C: 18, D: 0, E: 0, totalMagimins: 36}, {maxIngredient:6, maxMagimins:140})

module.exports = PotionCombinator;