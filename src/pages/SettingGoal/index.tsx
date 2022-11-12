import { Option } from './components/Option'

import { FaTooth, FaNotesMedical } from 'react-icons/fa'
import { GiMedicines } from 'react-icons/gi'
import { AiOutlineTeam } from 'react-icons/ai'

import { Container, Content, Title, Caption, ContainerOption } from './styles'

export function SettingGoal() {
  return (
    <Container>
      <Content>
        <Title>Qual sua função?</Title>
        <Caption>
          Conte um pouco mais de qual a sua principal atividade (Exemplo:
          Medico, nutricionista, etc...)
        </Caption>
        <ContainerOption>
          <Option label="Denstista" icon={<FaTooth />} />
          <Option label="Cirurgião" icon={<FaNotesMedical />} />
          <Option label="Estetica" icon={<GiMedicines />} />
          <Option label="Outros" icon={<AiOutlineTeam />} />
        </ContainerOption>
      </Content>
    </Container>
  )
}
