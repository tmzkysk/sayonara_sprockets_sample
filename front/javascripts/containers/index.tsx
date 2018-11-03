/* reactとreact-domの読み込み */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from '@/components/tests/index'
import { IndexAction, IndexStore } from '@/modules/index'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

interface State {
  IndexReducer: IndexStore
}

// Connect to Redux
function mapStateToProps(state: State) {
  return {
    value: state.IndexReducer.value
  }
}
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    send() {
      dispatch(IndexAction.send())
    }
  }
}
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)

export default AppContainer
