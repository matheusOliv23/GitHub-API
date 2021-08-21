import React from 'react'
import App from './App'
import { ResetCSS } from './globals/resetCSS'
import GithubProvider from './providers/github-provider'

const Providers = () => {
  return (
    <GithubProvider>
      <ResetCSS />
      <App />
    </GithubProvider>
  )
}

export default Providers
