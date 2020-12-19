import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>

      <main>
        <h1>
          Index
        </h1>
        <Link href="/home">
          <a>Home</a>
        </Link>
      </main>
    </div>
  )
}
