/* reactとreact-domの読み込み */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ShowUI from '@/components/tests/show'
import { ShowAction, ShowStore } from '@/modules/show'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router'

interface Props {
  ShowReducer: ShowStore
}

// Connect to Redux
function mapStateToProps(state: Props) {
  return {
    age: state.ShowReducer.age
  }
}
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    change() {
      dispatch(ShowAction.change())
    }
  }
}
const ShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowUI)

export default withRouter(ShowContainer)
