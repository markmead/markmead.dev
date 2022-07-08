import Head from 'next/head'
import Script from 'next/script'

import 'nextra-theme-blog/style.css'

import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6JVZMZE949"
          async
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer=window.dataLayer||[]
              function gtag(){dataLayer.push(arguments)}
              gtag('js',new Date)
              gtag('config','G-6JVZMZE949')`
          }}
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
