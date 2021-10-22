import React from 'react';
import axios from 'axios';

export default class GroceryItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      purchased: this.props.grocery.purchased
    };

    this.handleBoxCheck = this.handleBoxCheck.bind(this);
  }

  updateGrocery(purchased) {
    axios
    .put('/groceries', purchased)
    .then(this.props.fetch())
  }

  handleBoxCheck(e) {
    this.setState({
      purchased: !this.state.purchased
    });
    console.log(e.target.checked);
    this.updateGrocery({
      id: this.props.grocery.id,
      purchased: e.target.checked
    })
  }

  render() {
    return (
      <li >
        <label>Purchased:  </label>
        <input
          name='purchased'
          type='checkbox'
          checked={this.state.purchased}
          onChange={this.handleBoxCheck}>
        </input>
        <span>{this.props.grocery.item}:   </span>
        <span>{this.props.grocery.quantity}</span>
      </li>
    )
  }
}