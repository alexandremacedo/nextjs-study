import React from 'react';

// import { Container } from './styles';

import Link from 'next/link'
import Head from 'next/head'

import withAnalytics from '../src/hocs/withAnalytics'

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/panda.jpg" width="200" alt="" />
    <h1>Hello World</h1>
    <Link href="users">
      <a>
        Usuarios
      </a>
    </Link>
  </>
)

export default withAnalytics()(Home);
