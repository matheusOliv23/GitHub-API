import styled from 'styled-components'

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    width: 20rem;
  }

  border: 2px solid white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 1rem 1rem;
  width: 100%;
  height: auto;
  align-content: center;
  background-color: #282a35;
  color: white;
`

export const WrapperTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5rem 0;
`

export const WrapperFullname = styled.h2`
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0.5rem 0;
`

export const WrapperLink = styled.a`
  color: green;
  font-weight: bold;
`
