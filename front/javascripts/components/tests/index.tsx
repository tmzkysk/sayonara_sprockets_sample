/* reactとreact-domの読み込み */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { Output } from '@/components/output'
import { FaBeer } from 'react-icons/fa'
import SayHello from '@/lib/test'
import Test from '@/components/test'
import { Link } from 'react-router-dom'

/** Helloコンポーネントで取得するpropsの型定義 */
interface HelloProps {
  value: string | null
  send: () => void
}
/** Helloコンポーネントのstateの型定義 */
interface HelloState {
  inputName: string
  outputName: string
}

/** Helloコンポーネント */
export default class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props: HelloProps) {
    super(props)
    this.state = {
      inputName: Test(),
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
    const { value, send } = this.props
    return (
      <div className="hoge">
        <FaBeer />
        {SayHello()}
        <Input name={this.state.inputName} handleChange={this.handleChange} />
        <Button handleClick={this.handleClick} />
        <button onClick={send}>文言変更</button>
        <Link to="/tests/show">showへ</Link>
        <Output greeting={value} name={this.state.outputName} />
      </div>
    )
  }
}
