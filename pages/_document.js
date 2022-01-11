import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div
            data-netlify-deploy-id={process.env.DEPLOY_URL}
            data-netlify-site-id={process.env.SITE_ID}
            data-netlify-context={process.env.CONTEXT}
            data-vcs="github"
            style={{ position: 'fixed' }}
          >
            <script async src="https://netlify-cdp-loader.netlify.app/netlify.js" />
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
