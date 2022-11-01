const express = require('express');;
const Ingredients = require('./ingredients/ingredients');
const Cauldrons = require('./cauldrons/cauldron');
const PotionCombinator = require('./potions/potion');
const app = express();
const port = process.env.PORT || 5000;
var url = require('url');

app.get('/ingredientes', (req, res) => {
  res.send(Ingredients.getIngredients(req.query));
});

app.get('/cauldrons', (req, res)=>{
  res.send(Cauldrons.getCauldrons());
});

app.get('/potion', (req, res)=>{
  filter = JSON.parse(url.parse(req.url, true).query['potion'])
  let potionCombinator = new PotionCombinator()
  potionCombinator.getPossibleCombinations({
    A:parseInt(filter.A), 
    B:parseInt(filter.B), 
    C:parseInt(filter.C), 
    D:parseInt(filter.D), 
    E:parseInt(filter.E), 
    totalMagimins: parseInt(filter.maxMag)
  }, {maxIngredient:parseInt(filter.maxIng), maxMagimins:140})
  res.send(potionCombinator.possiblePotions);

});

app.listen(port, () => console.log(`Listening on port ${port}`));