const YEAR = new Date().getFullYear()

export default {
  titleSuffix: ' - Mark Mead',

  head: ({ meta }) => {
    return (
      <>
        <meta name="author" content="Mark Mead" />
        <link rel="canonical" href="https://www.markmead.dev" />
        <meta name="title" content={meta.title} />
        <meta property="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content="https://www.markmead.dev" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@shuding_" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:url" content="https://www.markmead.dev" />
        <meta
          property="twitter:image"
          content="https://www.markmead.dev/social.png"
        />
      </>
    )
  },

  footer: (
    <small className="flex justify-between mt-12">
      <span>
        <time>{YEAR}</time> © Mark Mead.
      </span>
      <a href="/feed.xml">RSS</a>
    </small>
  )
}
