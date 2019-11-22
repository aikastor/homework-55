import React from 'react';
import Ingredient from "../Ingredient/Ingredient";
import './Burger.css';


const Burger = (props) => {
  console.log(props.ingredients);
  const ingredientsComponents = props.ingredients.map( ing => {
    const components = [];

    for (let i = 0; i < ing.count; i++) {
      components.push(<Ingredient type={ing.name} key={ing.name+i}/>)
    }
    return components;
  }).flat();
  console.log(ingredientsComponents);

  return (
  <div><div className='Burger'>
    <div className='BreadTop'></div>
    {ingredientsComponents}
    <div className='BreadBottom'></div>
  </div>
      <p>total price: {props.totalPrice}</p>
  </div>

   );
};

export default Burger;
