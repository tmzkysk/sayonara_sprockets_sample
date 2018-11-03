import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { IndexReducer, IndexStore } from '@/modules/index'
import AppContainer from '@/containers/index'

/* Storeの実装 */

const initialState: IndexStore = { value: 'こんちゃ〜' }
const store = createStore(IndexReducer, initialState)

// Rendering
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('#content')
)
