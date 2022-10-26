const express = require('express');
const Ingredients = require('./ingredients/ingredients')
const app = express();
const port = process.env.PORT || 5000;

app.get('/ingredientes', (req, res) => {
  console.log(req.query)
  res.send(Ingredients.getIngredients());
});

app.listen(port, () => console.log(`Listening on port ${port}`));