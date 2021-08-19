import React from 'react'
import * as S from './styled'

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositórios</S.WrapperTab>
        <S.WrapperTab>Estrelas</S.WrapperTab>
      </S.WrapperTabList>
    </S.WrapperTabs>
  )
}

export default Repositories
