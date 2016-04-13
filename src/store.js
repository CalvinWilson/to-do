import { createStore } from 'redux';

// App Reducers
import itemReducer from './reducers/item';

var store = createStore(itemReducer);

export default store;