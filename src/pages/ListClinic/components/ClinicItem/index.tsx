import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import BusinessIcon from '@mui/icons-material/Business'

import { Container, Wrapper, Title, Phone, Address } from './styles'

export function ClinicItem() {
  return (
    <Container>
      <div>
        <Title>clinica viva mais</Title>
        <Wrapper>
          <LocalPhoneIcon />
          <Phone>(31) 3789-8245</Phone>
        </Wrapper>
        <Wrapper>
          <BusinessIcon />
          <Address>Av. Amazonas, 2489 - Santo Agostinho</Address>
        </Wrapper>
      </div>
      <ArrowForwardIosIcon />
    </Container>
  )
}
