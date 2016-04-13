import React from 'react';
import Item from 'ui/item';
import { addItem } from "api/data";
import store from "store";

export default React.createClass({
	getInitialState: function(){
        return {
        	newItem: ""
        } 
    },
    _handleChange: function(e) {
    	var val = e.target.value;
    	this.setState({
    		item: val
    	})
    },
    handleSubmit: function(e){
        e.preventDefault();
        addItem(this.state.item);
        this.setState({
        	item: ""
        })
    },
	  render: function () {
	    return (
	      <div className="items">
	      	<form method="post" onChange={this._handleChange} onSubmit={this.handleSubmit}>
	        	<input type="text" id="todo" placeholder="What needs to be done?"/>
	        </form>
	        {this.props.items.map(function(item){
	          return <Item key={item.id} {...item} />
	        })}
	      </div>
	    )
	  }
	})