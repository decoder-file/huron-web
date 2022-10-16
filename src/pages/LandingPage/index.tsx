import {
  Container,
  Header,
  Content,
  ContentOptions,
  ContentButton,
  Brand,
  Information,
  Title,
  LearnMoreButton,
  InformationButton,
} from './styles'

export function LandingPage() {
  return (
    <Container>
      <Content>
        <div>
          <Header>
            <Brand>Huron</Brand>
            <ContentOptions>
              <a>Home</a>
              <a>Sobre</a>
              <a>Preço</a>
              <a>Contato</a>
            </ContentOptions>
            <ContentButton>
              <a>Cadastrar-se</a>
              <button>Entrar</button>
            </ContentButton>
          </Header>
          <Information>
            <div>
              <Title>Transforme a gestão da sua clínica</Title>
              <LearnMoreButton>Get Quote Now</LearnMoreButton>
              <InformationButton>Learn More</InformationButton>
            </div>
          </Information>
        </div>
      </Content>
    </Container>
  )
}
