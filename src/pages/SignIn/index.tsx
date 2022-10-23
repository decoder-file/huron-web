import { FcGoogle } from 'react-icons/fc'

import logo from '../../assets/logoHuron.png'
import { Button } from '../../components/Button'

import {
  Container,
  Content,
  Header,
  Title,
  Caption,
  LoginButtonWithGoogle,
  Logo,
  CreateAccount,
  Line,
  ContainerSeparator,
  InputEmail,
  InputPassword,
} from './styles'

export function SignIn() {
  return (
    <Container>
      <Content>
        <Header>
          <Logo src={logo} />
          <Title>Olá, Bem-vindo</Title>
          <Caption>Insira suas credenciais para continuar</Caption>
          <LoginButtonWithGoogle>
            <FcGoogle />
            Login com o Google
          </LoginButtonWithGoogle>
          <ContainerSeparator>
            <Line />
            <p>Ou</p>
            <Line />
          </ContainerSeparator>
          <InputEmail title="E-mail" type="email" />
          <InputPassword title="Senha" type="password" />
          <Button title="Entrar" />
          <Line />
          <CreateAccount>Não tem uma conta? Criar aqui</CreateAccount>
        </Header>
      </Content>
    </Container>
  )
}
