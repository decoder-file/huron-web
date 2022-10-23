import styled from 'styled-components'
import { Input } from '../../components/Input'

export const Container = styled.div`
  height: 100vh;
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['blue-500']};
`
export const Content = styled.div`
  justify-content: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme['green-200']};
`

export const Header = styled.header`
  text-align: center;
`

export const Logo = styled.img`
  width: 70px;
  height: 70px;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme['green-300']};
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Caption = styled.h2`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => props.theme['black-200']};
  margin-top: 5px;
  margin-bottom: 20px;
`

export const InputEmail = styled(Input)`
  margin-bottom: 15px;
`
export const Terms = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  a {
    color: ${(porps) => porps.theme['white-100']};
    text-decoration: none;
    font-size: 0.75rem;
  }

  p {
    color: ${(porps) => porps.theme['white-100']};
    text-decoration: none;
    font-size: 0.75rem;
    margin: 0 0.625rem;
  }

  a:hover {
    color: #dfdfdf;
  }
`
export const BackButton = styled.button`
  position: fixed;
  z-index: 997;
  left: 90px;
  top: 60px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme['white-100']};
  border-radius: 0px 0px 8px 8px;
  border: 0;
  outline: 0;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 780px) {
    top: 20px;
    left: 10px;
  }
`
