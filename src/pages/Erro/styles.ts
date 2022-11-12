import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['blue-500']};
  height: 100vh;
  display: flex;

  justify-content: center;
  text-align: center;
  align-items: center;

  h1 {
    font-size: 4.0625rem;
    font-weight: 600;
    color: ${(props) => props.theme['white-100']};
  }

  h2 {
    font-size: 28px;
    font-weight: 400;
    color: ${(props) => props.theme['white-100']};
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme['white-100']};
    margin-top: 20px;
  }
`
export const Logo = styled.img`
  height: auto;
  width: 5rem;
  margin-top: 100px;
`
