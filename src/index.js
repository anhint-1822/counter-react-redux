import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import rootReducer from './reducers';
import ActionTypes from './constants';
import Label from './components/Label';
import Button from './components/Button';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

const render = () => ReactDOM.render(
  <div>
    <Label votes={store.getState().votes} />
    <Button 
      onUp={() => store.dispatch({type: ActionTypes.UP})} 
      onDown={() => store.dispatch({type: ActionTypes.DOWN})}  />
  </div>,
  document.getElementById('root')
);

render();
store.subscribe(render);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
