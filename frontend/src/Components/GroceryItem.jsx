import React from 'react';
import axios from 'axios';

export default class GroceryItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  render() {
    return (
      <li >
        <span>{this.props.grocery.item}:   </span>
        <span>{this.props.grocery.quantity}</span>
      </li>
    )
  }
}