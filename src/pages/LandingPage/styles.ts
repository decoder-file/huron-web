import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  justify-content: center;
  display: flex;
  background-color: ${(props) => props.theme['blue-500']};
`

export const Content = styled.div`
  flex-direction: column;
  width: 100%;
  max-width: 64rem;
  padding: 0 1rem;
`

export const Brand = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme['white-300']};
  font-size: 1.5rem;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  align-items: center;
`

export const ContentOptions = styled.div`
  a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme['white-300']};
    font-size: 0.875rem;
    margin-left: 1.313rem;
    cursor: pointer;
    transition: background-color 0.1s;
  }

  a:hover {
    color: ${(props) => props.theme['black-100']};
  }

  @media (max-width: 600px) {
    display: none;
  }
`

export const ContentButton = styled.div`
  button {
    padding: 15px;
    border: 0;
    background-color: #1d1617;
    cursor: pointer;
    border-radius: 4px;

    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme['white-300']};
    font-size: 0.875rem;
    margin-left: 1.313rem;
    transition: background-color 0.1s;
  }

  button:hover {
    background-color: ${(props) => props.theme['black-300']};
  }

  a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme['white-300']};
    font-size: 0.875rem;
    cursor: pointer;
    transition: background-color 0.1s;
    text-decoration: none;
  }

  a:hover {
    color: ${(props) => props.theme['black-100']};
  }
`

export const Information = styled.div`
  align-items: center;
  display: flex;
  height: 80vh;
`

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-style: normal;
  color: ${(props) => props.theme['white-300']};
  margin-bottom: 40px;
  font-size: 2.375rem;

  @media (min-width: 600px) {
    max-width: 400px;
    font-size: 3.625rem;
  }
`
export const LearnMoreButton = styled.button`
  border: 0;
  cursor: pointer;
  padding: 15px 36px;
  border-radius: 37px;
  background-color: ${(props) => props.theme['blue-200']};

  font-size: 0.875rem;
  font-family: 'Montserrat';
  font-weight: 700;
  color: ${(props) => props.theme['black-400']};

  transition: background-color 0.1s;

  :hover {
    background-color: ${(props) => props.theme['blue-400']};
    color: ${(props) => props.theme['white-100']};
  }
`
export const InformationButton = styled.button`
  border: 0;
  cursor: pointer;
  padding: 15px 36px;
  border-radius: 37px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme['white-100']};

  font-size: 0.875rem;
  font-family: 'Montserrat';
  font-weight: 700;
  color: ${(props) => props.theme['white-100']};

  transition: background-color 0.1s;

  :hover {
    background-color: ${(props) => props.theme['blue-400']};
    color: ${(props) => props.theme['white-100']};
  }

  @media (min-width: 400px) {
    margin-left: 20px;
  }

  @media (max-width: 600px) {
    margin-top: 10px;
  }
`
