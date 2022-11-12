import { useNavigate } from 'react-router-dom'

import { Container, Image } from './styles'

interface OptionProps {
  label: string
  // eslint-disable-next-line no-undef
  icon: React.ReactNode
}

export function Option({ label, icon }: OptionProps) {
  const navigate = useNavigate()
  return (
    <Container onClick={() => navigate('/home')}>
      <div>
        <Image>{icon}</Image>
        <p>{label}</p>
      </div>
    </Container>
  )
}
