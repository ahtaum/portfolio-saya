import React from 'react'
import Head from 'next/head'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
    
    <div id="layout-page">

        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        { children }

        <Footer />

    </div>
    
    </>
  )
}
