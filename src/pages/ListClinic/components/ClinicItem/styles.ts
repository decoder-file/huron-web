import styled from 'styled-components'
import { theme } from '../../../../styles/themes/default'

export const Container = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: ${theme.palette.common.white};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  text-align: left;
  width: 100%;
  box-shadow: ${theme.shadows[10]};
  transition: 0.4;
  margin-bottom: 20px;

  :hover {
    background-color: ${theme.palette.grey[300]};
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg {
    font-size: 1rem;
    margin-right: 10px;
  }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
`

export const Phone = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  font-style: normal;
`

export const Address = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  font-style: normal;
`
