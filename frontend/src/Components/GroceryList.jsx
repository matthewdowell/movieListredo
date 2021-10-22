import React from 'react';
import axios from 'axios';
import GroceryItem from './GroceryItem.jsx';

export default class GroceryList extends React.Component {
  constructor() {
    super()

    this.state = {
      groceries: []
    };
  }

  fetchGroceries() {
    axios
      .get('/groceries')
      .then(({ data }) => {
        this.setState({
          groceries: data
        })
      })
  }

  postGrocery(grocery) {
    axios
      .post('/groceries', grocery)
      .then(fetchGroceries())
  }

  componentDidMount() {
    this.fetchGroceries();
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
        <ul className="groceries">
          {this.state.groceries.map(grocery => {
            return (<GroceryItem grocery={grocery}/>)
          })}
        </ul>
      </div>
    )
  }

}