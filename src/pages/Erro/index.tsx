import logo from '../../assets/logo-escrita.png'

import { Container, Logo } from './styles'

export const Err = () => {
  return (
    <Container>
      <div>
        <h1>404</h1>
        <h2>Ops...</h2>
        <p>O link que você tentou acessar não está disponível</p>
        <Logo src={logo} />
      </div>
    </Container>
  )
}
