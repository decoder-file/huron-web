import styled from 'styled-components'
import { theme } from '../../styles/themes/default'

export const Container = styled.div`
  text-align: left;
  width: 100%;
`

export const InputContainer = styled.input`
  height: 45px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${theme.palette.grey[500]};
  padding-left: 10px;
  font-size: 0.875rem;
  font-weight: 400;
`

export const Title = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 5px;
`
