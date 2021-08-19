import React from 'react'
import Layout from './components/layout'
import Profile from './components/profile'
import { ResetCSS } from './globals/resetCSS'

function App() {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <div>Usuário</div>
        <div>Repositórios</div>
        <div>Históricos</div>
      </Layout>
    </main>
  )
}

export default App
