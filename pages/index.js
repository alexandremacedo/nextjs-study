import React from 'react';

// import { Container } from './styles';

import Link from 'next/link'

const Home = () => (
  <>
    <h1>Hello World</h1>
    <Link href="users">
      <a>
        Usuarios
      </a>
    </Link>
  </>
)

export default Home;