import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/home.css'
import Ingredient from './components/Ingredient/ingredient';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='content grid grid-3-1'>
      <div className='box leftBox'>
        {/* <CauldronType></CauldronType> */}
        {/* <PotionType></PotionType> */}
      </div>
      <div className='box centerBox'>
        {/* <Logo></Logo> */}
        {/* <Cauldron></Cauldron> */}
      </div>
      <div className='box rightBox'>
        {/* <AreaType></AreaType> */}
        {/* <TraitType></TraitType> */}
        {/* <PotionSize></PotionSize> */}
      </div>
      <div className='bigBox'>
        <Ingredient img="feyberry.png"></Ingredient>
      </div>
    </div>
  </>
);

