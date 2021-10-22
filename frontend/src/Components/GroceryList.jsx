import React from 'react';
import axios from 'axios';
import GroceryItem from './GroceryItem.jsx';

export default class GroceryList extends React.Component {
  constructor() {
    super()

    this.state = {
      groceries: [],
      item: '',
      quantity: 0
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
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
      .then(this.fetchGroceries())
  }

  componentDidMount() {
    this.fetchGroceries();
  }

  handleFormChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleButtonClick(e) {
    e.preventDefault();
    this.postGrocery({
      item: this.state.item,
      quantity:  Number(this.state.quantity)
    });
  }

  render() {
    return (
      <div>
        <img src="grocery-bags.png"/>
        <h1>Grocery List</h1>
        <form>
          <label> Item
            <input name="item" value={this.state.item} onChange={this.handleFormChange}/>
          </label>
          <label> Quantity
            <input type='number' name="quantity" value={this.state.quantity} onChange={this.handleFormChange}/>
          </label>
          <button onClick={this.handleButtonClick}>Add Grocery</button>
        </form>
        <ul className="groceries">
          {this.state.groceries.map(grocery => {
            return (<GroceryItem grocery={grocery} key={grocery.id}/>)
          })}
        </ul>
      </div>
    )
  }

}