import styled from 'styled-components'

import { theme } from '../../styles/themes/default'

export const Container = styled.div`
  height: 100vh;
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: ${theme.palette.primary.main};
  padding: 24px;
`
export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 1.75rem;
  font-style: 600;
  color: ${theme.palette.common.white};
  text-align: start;
`

export const Content = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: transparent;
  width: 400px;
`
export const ButtonAddClinic = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;

  font-size: 1.125rem;
  font-style: 600;
  color: ${theme.palette.common.white};

  :hover {
    color: ${theme.palette.grey[300]};
  }
`
