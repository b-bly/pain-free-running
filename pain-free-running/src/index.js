import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';  
import { createStore, applyMiddleware } from 'redux';  
import thunk from 'redux-thunk';  
import { createLogger } from 'redux-logger'
import reducers from './reducers';
//files
import App from './App';

//style
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(reducers);
const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)
// const store = createStore(reducers);


render(
 < Provider store={store} >
    <App />
    </Provider>,
  document.getElementById('root')
);