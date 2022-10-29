const express = require('express');;
const Ingredients = require('./ingredients/ingredients');
const Cauldrons = require('./cauldrons/cauldron');
const Potions = require('./potions/potion');
const app = express();
const port = process.env.PORT || 5000;

app.get('/ingredientes', (req, res) => {
  res.send(Ingredients.getIngredients(req.query));
});

app.get('/cauldrons', (req, res)=>{
  res.send(Cauldrons.getCauldrons());
});

app.get('/potion', (req, res)=>{
  let result =  Potions.getCombinationIngredients({A:6, B:6, C:0, D:0, E:0, totalMagimins: 12}, {maxIngredient:7, maxMagimins:140})
  res.send(result);

});

app.listen(port, () => console.log(`Listening on port ${port}`));