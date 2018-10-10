import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface OutputProps {
  greeting: string
  name: string
}

export const Output: React.SFC<OutputProps> = props => {
  const { greeting, name }: OutputProps = props
  const hasName: boolean = name !== ''
  const result: JSX.Element | '' = hasName ? (
    <h1>
      {greeting} {name}!
    </h1>
  ) : (
    ''
  )
  return <div>{result}</div>
}
