import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface InputProps {
  name: string
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void
}

export const Input: React.SFC<InputProps> = (props: InputProps) => {
  return (
    <input
      type="text"
      placeholder="Input any name."
      value={props.name}
      onChange={props.handleChange}
    />
  )
}
