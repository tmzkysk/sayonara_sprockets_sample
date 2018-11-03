import * as React from 'react'
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

// ジェネリクスの型引数は.matchの引数の型なのでanyでOK
interface Props extends RouteComponentProps<any> {
  age: string
  change: () => void
}

export default class ShowUI extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }

  handleToIndexPage = () => {
    this.props.history.push('/tests/index')
  }

  render(): JSX.Element {
    return (
      <div className="hoge">
        {this.props.age}
        <Link to="/tests/index">indexへ</Link>
        <button onClick={this.props.change}>年齢を変える</button>
        <button onClick={this.handleToIndexPage.bind(this)}>indexへ</button>
      </div>
    )
  }
}
