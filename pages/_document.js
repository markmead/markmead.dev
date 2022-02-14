import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    const meta = {
      url: 'https://hyperui.dev/',
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

          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={meta.url} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={`${meta.url}og.png`} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={meta.url} />
          <meta property="twitter:title" content={meta.title} />
          <meta property="twitter:description" content={meta.description} />
          <meta property="twitter:image" content={`${meta.url}og.png`} />
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
