import { useCallback } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import { NavLink, useNavigate } from 'react-router-dom'

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
  BackButton,
} from './styles'

export function SignIn() {
  const navigate = useNavigate()
  const handleOnClickSignUp = useCallback(
    () => navigate('/signup', { replace: true }),
    [navigate],
  )
  return (
    <>
      <BackButton onClick={() => navigate('/')}>
        <AiOutlineArrowLeft />
        <p>Voltar</p>
      </BackButton>

      <Container>
        <div style={{ margin: 10, width: 400 }}>
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
                <NavLink to="/recover-password">Esqueci minha senha</NavLink>
              </RecoverPassword>
              <Button title="Entrar" />
              <Line />
              <CreateAccount onClick={handleOnClickSignUp}>
                Não tem uma conta? Criar aqui
              </CreateAccount>
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
