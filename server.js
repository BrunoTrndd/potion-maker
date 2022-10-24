
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/mensagem', (req, res) => {
  res.send({ pot: {
    feyberry : {
    name: 'Feyberry',
    a:6,
    b:0,
    c:0,
    d:0,
    e:0,
    trait1:'neutral',
    trait2:'neutral',
    trait3:'neutral',
    trait4:'neutral',
    trait5:'neutral',
    img:'feyberry.png'
  },
  batata:{
    name: 'Batata',
    a:0,
    b:6,
    c:0,
    d:0,
    e:0,
    trait1:'neutral',
    trait2:'neutral',
    trait3:'neutral',
    trait4:'neutral',
    trait5:'neutral'
  }
}});
});

app.listen(port, () => console.log(`Listening on port ${port}`));

//nick é bunitão