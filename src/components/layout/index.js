import React from 'react'
import * as S from './styled'

function Layout({ children }) {
  return (
    <div>
      <S.WrapperLayout>
        <header>header</header>
        {children}
      </S.WrapperLayout>
    </div>
  )
}

export default Layout
