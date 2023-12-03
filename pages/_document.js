import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic&display=optional"
            rel="stylesheet"
            type="text/css"

          />
          {/** Styles for the pricing table */}
          <link href={"/css/pricing.css"} rel="stylesheet" />
          {/** Core theme CSS (includes Bootstrap 4) */}
          <link href={"/css/styles.css"} rel="stylesheet" />
          {/** Additional customization css */}
          <link href={"/css/project.css"} rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument