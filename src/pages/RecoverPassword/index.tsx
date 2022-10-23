import { AiOutlineArrowLeft } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logoHuron.png'
import { Button } from '../../components/Button'

import {
  Container,
  Content,
  Header,
  Title,
  Caption,
  Logo,
  InputEmail,
  Terms,
  BackButton,
} from './styles'

export function RecoverPassword() {
  const navigate = useNavigate()
  return (
    <>
      <BackButton onClick={() => navigate('/signin')}>
        <AiOutlineArrowLeft />
        <p>Voltar</p>
      </BackButton>

      <Container>
        <div style={{ margin: 10, width: 400 }}>
          <Content>
            <Header>
              <Logo src={logo} />
              <Title>Esqueceu sua senha?</Title>
              <Caption>
                Preencha abaixo seu endereço de email para receber as instruções
                necessárias e criar uma nova senha na Huron.
              </Caption>
              <InputEmail title="E-mail" type="email" placeholder="Seu email" />
              <Button title="Recuperar minha senha" />
            </Header>
          </Content>
          <Terms>
            <a href="/">Suporte</a>
            <p>-</p>
            <a href="/">Termos de Uso</a>
            <p>-</p>
            <a href="/">Política de Privacidade</a>
          </Terms>
        </div>
      </Container>
    </>
  )
}
