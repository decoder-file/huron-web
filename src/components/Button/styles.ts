import styled from 'styled-components'
import { theme } from '../../styles/themes/default'

export const Container = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: 0.2;
  padding: 5px;

  p {
    font-weight: 600;
    font-size: 0.75rem;
    color: ${theme.palette.common.white};
  }

  :hover {
    background-color: ${theme.palette.primary.dark};
  }
`
