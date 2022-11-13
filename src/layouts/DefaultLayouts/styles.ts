import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: 100vh;
  margin: 0 auto;
  padding: 1rem;
  background: ${(props) => props.theme['white-200']};
  display: flex;
  flex-direction: column;
`
