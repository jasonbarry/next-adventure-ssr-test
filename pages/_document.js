import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    console.log('getInitialProps', process.env)
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    console.log('render', process.env)
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          {process.env.CONTEXT === 'deploy-preview' && 
            <div
              data-netlify-deploy-id={(process.env.DEPLOY_URL || '').match(/([0-9a-f]+)--/i)[1]}
              data-netlify-site-id={process.env.SITE_ID}
              data-vcs="github"
              style={{ position: 'fixed' }}
            >
              <script async src="https://netlify-cdp-loader.netlify.app/netlify.js" />
            </div>
          }
        </body>
      </Html>
    )
  }
}

export default MyDocument
