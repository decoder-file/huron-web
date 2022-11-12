import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  outline: 0;
  cursor: pointer;
  border: 1px solid #d7deea;
  border-radius: 20px;
  padding: 8px;
  max-width: 80px;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: 0.1s;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    color: ${(props) => props.theme['white-100']};
    margin: 8px 0;
  }

  :hover {
    border: 1px solid ${(props) => props.theme['green-200']};
    p {
      color: ${(props) => props.theme['green-200']};
    }

    div {
      div {
        border: 1px solid ${(props) => props.theme['green-200']};
        background-color: ${(props) => props.theme['green-200']};
      }
    }
  }
`
export const Image = styled.div`
  padding: 16px;
  border: 1px solid #ffffff;
  border-radius: 16px;

  svg {
    color: ${(props) => props.theme['white-100']};
    font-size: 22px;
  }
`
