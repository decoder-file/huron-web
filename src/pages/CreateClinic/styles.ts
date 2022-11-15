import styled from 'styled-components'

import { theme } from '../../styles/themes/default'

import { Button } from '../../components/Button'

export const Container = styled.div`
  height: 100vh;
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: ${theme.palette.primary.main};
  padding: 24px;
`

export const Content = styled.div`
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  width: 700px;
  background-color: ${theme.palette.common.white};
`
export const Header = styled.div`
  text-align: start;
  margin-bottom: 20px;
`

export const Title = styled.h1`
  font-size: 1.75rem;
  font-style: 600;
`

export const Caption = styled.p`
  font-size: 0.875rem;
  font-style: 400;
  margin-top: 5px;
`
export const ContainerInput = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1rem;

  input {
    width: 100%;
  }

  textarea {
    width: 100%;
  }
`
export const ButtonAdd = styled(Button)`
  margin-top: 10px;
`
