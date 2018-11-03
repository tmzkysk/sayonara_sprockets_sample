import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { IndexReducer, IndexStore } from '@/modules/index'
import { ShowReducer, ShowStore } from '@/modules/show'
import AppContainer from '@/containers/index'
import ShowContainer from '@/containers/show'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

/* Storeの実装 */
const rootReducer = combineReducers({ IndexReducer, ShowReducer })
const store = createStore(rootReducer)

// Rendering
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/tests/index" component={AppContainer} />
        <Route path="/tests/show" component={ShowContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#content')
)
