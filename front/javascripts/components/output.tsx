import React from 'react'

interface OutputProps {
  greeting: string | null
  name: string
}

export const Output = (props: OutputProps) => {
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
