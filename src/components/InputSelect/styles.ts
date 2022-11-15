import styled from 'styled-components'
import Select from '@mui/material/Select'
import { theme } from '../../styles/themes/default'

export const Container = styled.div`
  width: 100%;
  height: 45px;
`

export const Content = styled(Select)`
  height: 100%;
  width: 100%;
  text-align: start;
  font-size: 0.75rem;
  font-weight: 500;
  border-color: ${theme.palette.grey[500]};
`

export const Title = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 5px;
  text-align: start;
`
