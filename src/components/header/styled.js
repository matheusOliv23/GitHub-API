import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.2rem;

  input {
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 100%;
    height: 2rem;
    text-align: center;
    background-color: #282a35;
    color: white;
    padding: 0.5rem;

    &:hover {
      box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
    }
  }

  button {
    background-color: #ccc;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border-radius: 0.5rem;
    font-weight: bold;

    &:hover {
      background-color: #282a35;
      color: white;
      box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
    }
  }
`
