import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import App from 'layouts/app';

// Components
import ItemContainer from 'ui/items-container';

ReactDOM.render((  
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={ItemContainer} />
    </Route>
  </Router>
), document.getElementById('app'));