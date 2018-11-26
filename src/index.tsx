import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import { applyMiddleware, createStore  } from 'redux';

const logger = createLogger({
  // ...options
});

export interface IAdd {type: "X", payload: {duppa: string}}
export interface IRemove {type: "Y", payload: {duppa: string}}
export type Action = IAdd | IRemove;

export function addIt(): IAdd {
  return {
    payload: {
      duppa : "ADD"
    },
    type: "X"
  }
}
export function removeIt(): IRemove {
  return {
    payload: {
      duppa : "REMOVE"
    },
    type: "Y"
    
  }
}
export interface IState {
  duppa: string
}
export const initialState: IState = {
  duppa: "123"
};
export function reducer(state: IState = initialState, action: Action) {
  switch (action.type) {
    case "X": {
      return {
        ...state,
        duppa: state.duppa+"_"
      }
    }
    default:
      return state
  }
}

const store = createStore<IState, Action, any, any>(reducer, initialState, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
