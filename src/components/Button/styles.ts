import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: ${(props) => props.theme['blue-400']};
  transition: 0.8;
  padding: 5px;

  p {
    font-weight: 600;
    font-size: 0.75rem;
    color: ${(props) => props.theme['white-100']};
  }

  :hover {
    background-color: ${(props) => props.theme['blue-300']};
  }
`
