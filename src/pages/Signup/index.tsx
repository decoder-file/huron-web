import { FcGoogle } from 'react-icons/fc'

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
} from './styles'

export function SignUp() {
  return (
    <Container>
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
          <InputEmail title="CPF" placeholder="Digite seu CPF" type="text" />
          <InputEmail title="E-mail" placeholder="E-mail" type="email" />
          <InputPassword title="Senha" placeholder="Senha" type="password" />
          <Button title="Cadastrar" />
          <Line />
          <CreateAccount>Entrar</CreateAccount>
        </Header>
      </Content>
    </Container>
  )
}
