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
  RecoverPassword,
  Terms,
} from './styles'

export function SignIn() {
  return (
    <Container>
      <div>
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
            <RecoverPassword>
              <a href="/">Esqueci minha senha</a>
            </RecoverPassword>
            <Button title="Entrar" />
            <Line />
            <CreateAccount>Não tem uma conta? Criar aqui</CreateAccount>
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
  )
}
