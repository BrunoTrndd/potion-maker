import React from 'react';
import ReactDOM from 'react-dom/client';
import Ingredient from './ingredients/ingredient.js'
import './css/home.css'
import App from './App.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Ingredient img="feyberry.png">
    </Ingredient>
    <Ingredient img="impstool_mushroom.png">
    </Ingredient>
    <Ingredient img="mandrake_root.png">
    </Ingredient>
  </>
);

