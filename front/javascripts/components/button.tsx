import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface ButtonProps {
  handleClick: () => void
}

export const Button: React.SFC<ButtonProps> = props => {
  const { handleClick }: ButtonProps = props
  return <button onClick={handleClick}>Say Hello</button>
}
