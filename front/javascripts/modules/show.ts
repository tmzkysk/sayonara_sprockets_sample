import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { string } from 'prop-types'

// Store
export interface ShowStore {
  age: string
}

// Action定義
const CHANGE = 'CHANGE'

export interface ActionType {
  type: string
  age: string
}

export const ShowAction = {
  change(): ActionType {
    return {
      type: CHANGE,
      age: `${new Date().getSeconds().toString()}歳`
    }
  }
}

// Reducers
export function ShowReducer(
  state: ShowStore = { age: '0歳' },
  action: { type: string; age: string }
) {
  switch (action.type) {
    case CHANGE:
      return Object.assign({}, state, {
        age: action.age
      })
    default:
      return state
  }
}
