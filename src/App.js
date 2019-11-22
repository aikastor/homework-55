import React, {Component} from 'react';

import './App.css';
import Ingredients from "./components/Ingredients/Ingredients";
import Burger from "./components/Burger/Burger";

class App extends Component {
  state = {
    ingredients: [
      {name: 'Meat', count: 1},
      {name: 'Cheese', count: 1},
      {name: 'Bacon', count: 1},
      {name: 'Salad', count: 1},
    ],
    totalPrice: 125,
  };
  addIngredient = (obj) =>{
      let ingredients = [...this.state.ingredients];
      const  index = ingredients.findIndex(i=> i.name === obj.name);
      ingredients[index].count ++;
      let totalPrice = this.state.totalPrice;
      totalPrice+=obj.price;
      this.setState({ingredients, totalPrice});
  };
  removeIngredient = (obj) =>{
    const ingredients = [...this.state.ingredients];
    const  index = ingredients.findIndex(i=> i.name === obj.name);
    ingredients[index].count --;
    let totalPrice = this.state.totalPrice;
    totalPrice -= obj.price;
    this.setState({ingredients, totalPrice});
  };
  render() {
    return (
      <div className='App'>
        <div>
          <Ingredients
            ingredients={this.state.ingredients}
            addIngredient={this.addIngredient}
            removeIngredient={this.removeIngredient}/>
        </div>
        <div>
          <Burger ingredients={this.state.ingredients}
                  counter={this.state.totalPrice}/>
        </div>

      </div>
    );
  }
}

export default App;
