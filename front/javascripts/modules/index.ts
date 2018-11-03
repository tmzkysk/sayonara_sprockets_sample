import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// Store
export interface IndexStore {
  value: string | null
}

// Action定義
const SEND = 'SEND'

export const IndexAction = {
  send() {
    // Action
    return {
      type: SEND,
      value: new Date().getSeconds().toString()
    }
  }
}

// Reducers
export function IndexReducer(
  state: IndexStore = { value: null },
  action: { type: string; value: string | null }
) {
  switch (action.type) {
    case SEND:
      return Object.assign({}, state, {
        value: action.value
      })
    default:
      return state
  }
}
