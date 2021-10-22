import React from 'react';

export default class GroceryList extends React.Component {
  constructor() {
    super()

    this.state = {};
  }

  render() {
    return (
      <div>
        <img src="grocery-bags.png"/>
        <h1>Grocery List</h1>
        <form>
          <label> Item
            <input name="item" value=""/>
          </label>
          <label> Quantity
            <input name="quantity" value=""/>
          </label>
          <button>Add Grocery</button>
        </form>
        <ul class="groceries">
          <li>
            <span> frozen pizza </span>
            <span> 5 </span>
          </li>
          <li>
            <span> noosa yogurt </span>
            <span> 10 </span>
          </li>
          <li>
            <span> wine </span>
            <span> 2 </span>
          </li>
          <li>
            <span> iced coffe </span>
            <span> 1 </span>
          </li>
          <li>
            <span> a </span>
            <span> 1 </span>
          </li>
          <li>
            <span> pizza </span>
            <span> 1 </span>
          </li>
        </ul>
      </div>
    )
  }

}