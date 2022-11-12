import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['blue-500']};
`
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme['white-100']};
  margin-bottom: 15px;
`
export const Caption = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme['white-100']};
  margin-bottom: 15px;
`

export const Content = styled.div`
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`
export const ContainerOption = styled.div`
  justify-content: center;
  align-items: center;

  display: flex;
  gap: 15px;
`
