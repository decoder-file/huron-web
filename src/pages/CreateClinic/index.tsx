import { useState } from 'react'

import { Input } from '../../components/Input'
import { InputSelect } from '../../components/InputSelect'
import { TextArea } from '../../components/TextArea'

import {
  Container,
  Content,
  Header,
  Title,
  Caption,
  ContainerInput,
  ButtonAdd,
} from './styles'

export function CreateClinic() {
  const [category, setCategory] = useState('')

  return (
    <Container>
      <Content>
        <Header>
          <Title>Criar clínica</Title>
          <Caption>Crie sua clínica e organize melhor suas financias</Caption>
        </Header>

        <Input title="Nome" placeholder="Adicione o nome da sua clínica" />
        <ContainerInput>
          <Input title="Endereço" placeholder="Endereço da sua clínica" />
          <Input title="Cep" placeholder="CEP da clínica" />
        </ContainerInput>

        <ContainerInput>
          <Input title="Telefone" placeholder="Telefone da clínica" />
          <InputSelect
            title="Categoria"
            label="Selecione a categoria da sua clínica"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            onChange={(event) => setCategory(event.target.value as string)}
          />
        </ContainerInput>

        <ContainerInput>
          <TextArea
            title="Descrição"
            placeholder="Adicione uma descrição sobre sua clínica"
          />
        </ContainerInput>

        <ButtonAdd title="Criar" />
      </Content>
    </Container>
  )
}
