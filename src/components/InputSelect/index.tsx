import MenuItem from '@mui/material/MenuItem'
import { SelectProps } from '@mui/material/Select'

import { Container, Content, Title } from './styles'

interface InputSelectProps extends SelectProps {
  title: string
}

const categoryOption = [
  {
    id: 1,
    name: 'Denstista',
    value: 'dentist',
  },
  {
    id: 2,
    name: 'Cirurgião',
    value: 'surgeon',
  },
  {
    id: 3,
    name: 'Nutricionista',
    value: 'nutritionist',
  },
  {
    id: 4,
    name: 'Estetica',
    value: 'aesthetics',
  },
  {
    id: 5,
    name: 'Outros',
    value: 'others',
  },
]

export function InputSelect({ title, ...rest }: InputSelectProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content
        {...rest}
        sx={{
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2DFCB7',
          },
        }}
      >
        {categoryOption.map((e) => {
          return (
            <MenuItem key={e.id} value={e.value}>
              {e.name}
            </MenuItem>
          )
        })}
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Content>
    </Container>
  )
}
