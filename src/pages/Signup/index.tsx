import { useCallback } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom'

import logo from '../../assets/logoHuron.png'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

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
  ContainerNameUser,
  Separator,
  Terms,
  BackButton,
} from './styles'

export function SignUp() {
  const navigate = useNavigate()
  const handleOnClickSignIn = useCallback(
    () => navigate('/signin', { replace: true }),
    [navigate],
  )

  return (
    <>
      <BackButton onClick={() => navigate('/')}>
        <AiOutlineArrowLeft />
        <p>Voltar</p>
      </BackButton>

      <Container>
        <div style={{ margin: 50, width: 400 }}>
          <Content>
            <Header>
              <Logo src={logo} />
              <Title>Inscreva-se</Title>
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
              <ContainerNameUser>
                <Input
                  title="Primeiro nome"
                  placeholder="Primeiro nome"
                  type="text"
                />
                <Separator />
                <Input title="Sobrenome" placeholder="Sobrenome" type="text" />
              </ContainerNameUser>
              <InputEmail
                title="CPF"
                placeholder="Digite seu CPF"
                type="text"
              />
              <InputEmail title="E-mail" placeholder="E-mail" type="email" />
              <InputPassword
                title="Senha"
                placeholder="Senha"
                type="password"
              />
              <Button title="Cadastrar" />
              <Line />
              <CreateAccount onClick={handleOnClickSignIn}>
                J?? tem uma conta? Acesse aqui
              </CreateAccount>
            </Header>
          </Content>
          <Terms>
            <a href="/">Suporte</a>
            <p>-</p>
            <a href="/">Termos de Uso</a>
            <p>-</p>
            <a href="/">Pol??tica de Privacidade</a>
          </Terms>
        </div>
      </Container>
    </>
  )
}
