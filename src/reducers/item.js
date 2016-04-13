var itemInitialState = {
  items: []
};

export default function(state = itemInitialState, action) {
  var newState = Object.assign({}, state)

  switch(action.type) {
    
    case 'GET_ITEMS':
      newState.items = action.items;
      
      return newState;

    default:
      return state;
      
  }
}