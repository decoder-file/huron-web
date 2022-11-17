import { ClinicItem } from './components/ClinicItem'

import { Container, Content, ButtonAddClinic, Title } from './styles'

export function ListClinic() {
  return (
    <Container>
      <Content>
        <Title>Selecione sua clínica:</Title>
        <ClinicItem />
        <ClinicItem />
        <ButtonAddClinic>Adicionar clínica</ButtonAddClinic>
      </Content>
    </Container>
  )
}
