import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    const meta = {
      url: 'https://markmead.dev/',
      title: 'Web Developer - Mark Mead',
      description: 'Building websites with the TALL stack and Next JS.'
    }

    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-6JVZMZE949"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-6JVZMZE949');
            `
            }}
          />
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
