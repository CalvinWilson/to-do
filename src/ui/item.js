import React from 'react';
import { deleteItem, markComplete } from 'api/data';

export default React.createClass({
  _delete: function () {
    deleteItem(this.props.id);
  },
  handleCheckChange: function(e) {
    markComplete(this.props.id, e.target.checked);
  },
  render: function () {
    return (
        <div className="itembar">
          <input type="checkbox" value="None" className="checkbox" name="check" checked={this.props.done} onChange={this.handleCheckChange} /> 
          <span className="itemname"> {this.props.title}</span>
          <button className="delete" onClick={this._delete}>Delete</button>
        </div>
    )
  }
})