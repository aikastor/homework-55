import React from 'react';

import saladImg from '../../assets/salad.png';
import cheeseImg from '../../assets/cheese.png';
import baconImg from '../../assets/bacon.png';
import meatImg from '../../assets/meat.png';

const INGREDIENTS = [
  {name: 'Meat', price: 50, image: meatImg},
  {name: 'Cheese', price: 20, image: cheeseImg},
  {name: 'Bacon', price: 30, image: baconImg},
  {name: 'Salad', price: 5, image: saladImg}
];

const Ingredients = (props) => {
  let i =0;
  return INGREDIENTS.map((ingredient,index) => (
    <div key={i++}>
      <img src={ingredient.image} alt={ingredient.name} onClick={()=> props.addIngredient(ingredient)}/>
      <span>{ingredient.name}</span>
      <span>x{props.ingredients[index].count}</span>
        <button onClick={() => props.removeIngredient(ingredient)} disabled={!props.ingredients[index].count > 0}>remove</button>
    </div>
    )
  );
};

export default Ingredients;
