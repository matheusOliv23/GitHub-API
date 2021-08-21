import React, { useEffect, useState } from 'react'
import * as S from './styled'
import RepositoryItem from '../repository-item'
import useGithub from '../../hooks/github-hooks'

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub()
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false)

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login)
      getUserStarred(githubState.user.login)
    }
    setHasUserForSearchRepos(githubState.repositories)
  }, [githubState.user.login])

  return (
    <>
      {hasUserForSearchRepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositórios</S.WrapperTab>
            <S.WrapperTab>Estrelas</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.repositories.map(item => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.starred.map(item => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  )
}

export default Repositories
