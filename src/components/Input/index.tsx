import { InputHTMLAttributes } from 'react'

import { Container, InputContainer, Title } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
}

export function Input({ title, ...rest }: InputProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <InputContainer {...rest} />
    </Container>
  )
}
