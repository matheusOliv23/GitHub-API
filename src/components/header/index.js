import React, { useState } from 'react'
import useGithub from '../../hooks/github-hooks'
import * as S from './styled'

const Header = () => {
  const { getUser } = useGithub()
  const [usernameForSearch, setUsernameForSearch] = useState()

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      getUser(usernameForSearch)
    }
  }

  const submitGetUser = () => {
    if (!usernameForSearch) return
    return getUser(usernameForSearch)
  }
  return (
    <header>
      <S.Wrapper>
        <input
          value={usernameForSearch}
          type="text"
          placeholder="Digite o nome do usuário"
          onKeyPress={handleKeyPress}
          onChange={event => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  )
}

export default Header
