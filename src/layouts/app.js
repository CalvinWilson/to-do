import React from 'react';
import { addItem } from "api/data";
import store from "store";

require('assets/styles/style.scss');

export default React.createClass({
  render: function () {
    return (
      <div>
        <h1>To-Do List</h1>
        {this.props.children}
      </div>
    )
  }
})