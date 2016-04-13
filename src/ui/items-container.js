import React from 'react';
import Items from 'ui/items';
import store from 'store';
import { getItems } from 'api/data';

export default React.createClass({
  getInitialState: function () {
    return {
      items: []
    };
  },
  componentWillMount: function () {
    getItems()
    store.subscribe(function(){
      var currentStore = store.getState();
      this.setState({
        items: currentStore.items
      })
    }.bind(this));
  },  
  render: function () {
    return (
      <Items items={this.state.items} />
    )
  }
})