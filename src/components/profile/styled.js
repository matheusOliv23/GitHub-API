import styled from 'styled-components'

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem;
    flex-wrap: wrap;
    gap: 5rem;

    h4 {
      margin-top: 10rem;
    }
  }
  overflow: hidden;
  background-color: #282a35;
  color: white;
  text-align: center;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`
export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;

  h1 {
    font-size: 1.8rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  h4 {
    font-size: 1rem;
    font-weight: bold;
  }
`

export const WrapperStatusCount = styled.div`
  display: flex;
  padding-bottom: 2rem;
  align-items: center;
  justify-content: center;

  div {
    margin: 1.2rem;
    text-align: center;
  }
`

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  h3 {
    margin-right: 1rem;
  }
  a {
    font-size: 1.2rem;
    font-weight: bold;
  }
`
export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 38vh;
  margin: 1.5rem;
`
