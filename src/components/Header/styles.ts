import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['white-300']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  img {
    height: 60px;
    width: auto;
  }
`
