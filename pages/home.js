import React from 'react';
import styled from 'styled-components'

import Link from 'next/link'
import Head from 'next/head'

const Title = styled.h1`
  color: #069;
  font-size: 50px;
`

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/panda.jpg" width="200" alt="" />
    <Title>Hello World</Title>
    <Link href="users">
      <a>
        Usuarios
      </a>
    </Link>
  </>
)

export default Home
