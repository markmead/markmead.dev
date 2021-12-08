import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const meta = {
      title: 'Shopify Developer Essex | Mark Mead',
      description:
        'Building ecommerce websites with Shopify, powered by Tailwind CSS, Alpine JS and Ruby on Rails.'
      // image:
      //   'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png'
    }

    return (
      <Html lang="en">
        <Head>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-6JVZMZE949"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-6JVZMZE949');
            `}
          </Script>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          {/* <meta property="og:image" content={meta.image} /> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@yourname" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          {/* <meta name="twitter:image" content={meta.image} /> */}
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
