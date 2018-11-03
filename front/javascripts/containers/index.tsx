/* reactとreact-domの読み込み */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from '@/components/tests/index'
import { IndexAction, IndexStore } from '@/modules/index'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

// Connect to Redux
function mapStateToProps(state: IndexStore) {
  return {
    value: state.value
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
