import React, { Component } from 'react'
import ReactGA from 'react-ga'

import { loadGetInitialProps } from "next/dist/lib/utils"

export default () => Composed =>
  class extends Component {
    //Always load this
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx)
    }

    componentDidMount() {
      console.log('Pag view')

      ReactGA.initialize('ID_Analitics')
      ReactGA.pageview(window.location.pathname)
    }

    render() {
      return (
        <Composed {... this.props} />
      )
    }
  }