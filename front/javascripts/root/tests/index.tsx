/* reactとreact-domの読み込み */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Output } from '../../components/output'
import { FaBeer } from 'react-icons/fa'

/** Helloコンポーネントで取得するpropsの型定義 */
interface HelloProps {
  greeting: string
}
/** Helloコンポーネントのstateの型定義 */
interface HelloState {
  inputName: string
  outputName: string
}
/** Helloコンポーネント */
class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props: HelloProps) {
    super(props)
    this.state = {
      inputName: '',
      outputName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      inputName: event.currentTarget.value
    })
  }
  handleClick(): void {
    this.setState({
      inputName: '',
      outputName: this.state.inputName
    })
  }
  render(): JSX.Element {
    const { greeting } = this.props
    return (
      <div>
        <FaBeer />
        <Input name={this.state.inputName} handleChange={this.handleChange} />
        <Button handleClick={this.handleClick} />
        <Output greeting={greeting} name={this.state.outputName} />
      </div>
    )
  }
}

/** Bootstraping */
ReactDOM.render(
  <Hello greeting="Hello!!" />,
  document.querySelector('#content')
)
