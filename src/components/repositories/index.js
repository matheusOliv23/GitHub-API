import React from 'react'
import * as S from './styled'
import RepositoryItem from '../repository-item'

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
      <S.WrapperTabPanel>
        <RepositoryItem
          name="app-ideas"
          linkToRepo="https://github.com/matheusOliv23/app-ideas"
          fullName="matheusOliv23/app-ideas"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="matheusOliv23"
          linkToRepo="https://github.com/matheusOliv23/app-ideas"
          fullName="matheusOliv23/matheusOliv23"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories
