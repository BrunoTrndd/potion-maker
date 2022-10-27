const express = require('express');
const Ingredients = require('./ingredients/ingredients')
const app = express();
const port = process.env.PORT || 5000;

app.get('/ingredientes', (req, res) => {
  res.send(Ingredients.getIngredients(req.query));
});

app.listen(port, () => console.log(`Listening on port ${port}`));