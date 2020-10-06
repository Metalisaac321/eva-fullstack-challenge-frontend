import React, { ReactNode } from 'react'
import Head from 'next/head'
import { evaIconInBase64 } from './constants'
import Router from "next/router";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Topbar />
    {children}
  </div>
)

const Topbar = () => {
  const logout = () => {
    document.cookie = '';
    Router.replace('/');
  }
  return (
    <header className="justify-between items-center mx-auto border mb-4 h-20 flex flex-row text-white gradient-purple-to-red">
      <img
        className="w-32 h-12"
        src={evaIconInBase64}
        alt="eva-icon"
      />
      <button className="text-2xl hover:text-blue-400 mr-4 focus:outline-none" onClick={logout}>
        Logout
      </button>
    </header>
  )
}

export default Layout
