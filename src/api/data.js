import axios from 'axios';
import store from 'store';


export function getItems() {
  return axios.get('http://localhost:8001/items').then(function(resp){

    store.dispatch({
      type: 'GET_ITEMS',
      items: resp.data
    });

  });
}

export function deleteItem (id) {
  return axios.delete('http://localhost:8001/items/' + id).then(function(resp){
    getItems();
  });
}

export function addItem (payload) {
  return axios.post('http://localhost:8001/items/', {title:payload})
    .then(function(resp){
      getItems();
    });
}

export function markComplete (id, done) {
  return axios.patch('http://localhost:8001/items/' + id, {done: done})
    .then(function(resp){
      getItems();
    });
}