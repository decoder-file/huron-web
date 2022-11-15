import { TextareaHTMLAttributes } from 'react'
import { Container, Title, Text } from './styles'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string
}

export function TextArea({ title, ...rest }: TextAreaProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Text {...rest} />
    </Container>
  )
}
