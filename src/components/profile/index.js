import React from 'react'
import * as S from './styled'

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/78116908?v=4"
        alt="foto do usuário"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Matheus H Oliveira</h1>
          <S.WrapperUsername>
            <h3>Usuário:</h3>
            <a
              href="https://github.com/matheusOliv23"
              target="_blank"
              rel="noreferrer"
            >
              matheusOliv23
            </a>
          </S.WrapperUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Seguidores</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Estrelas</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Seguindo</h4>
            <span>5</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile
