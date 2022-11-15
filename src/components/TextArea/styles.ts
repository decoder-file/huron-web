import styled from 'styled-components'
import { theme } from '../../styles/themes/default'

export const Container = styled.div`
  width: 100%;
`

export const Title = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 5px;
  text-align: start;
`

export const Text = styled.textarea`
  width: 100%;
  border: 1px solid ${theme.palette.grey[500]};
  resize: none;
  height: 6rem;
  padding: 1rem;
  border-radius: 8px;
  line-height: 1.4;
  font-size: 0.875rem;
  font-weight: 400;
`
