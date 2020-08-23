import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Document</title>
          <style>{`body {background: #069}`}</style>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </html>
    )
  }
}