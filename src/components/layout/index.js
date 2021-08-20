import React from 'react'
import Header from '../header'
import * as S from './styled'

function Layout({ children }) {
  return (
    <div>
      <S.WrapperLayout>
        <Header />
        {children}
      </S.WrapperLayout>
    </div>
  )
}

export default Layout
