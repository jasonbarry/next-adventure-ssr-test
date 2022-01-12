import Document, { Head, Html, Main, NextScript } from 'next/document'

console.log('_document', process.env)

class MyDocument extends Document {
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
              data-from-nextjs-document="true"
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
