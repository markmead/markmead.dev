const YEAR = new Date().getFullYear()

export default {
  titleSuffix: ' - Mark Mead',
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Mark Mead.
      <a href="/feed.xml">RSS</a>
    </small>
  )
}
