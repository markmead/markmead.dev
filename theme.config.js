const YEAR = new Date().getFullYear()

export default {
  titleSuffix: ' - Mark Mead',

  footer: (
    <small className="block mt-12">
      <time>{YEAR}</time> © Mark Mead.
    </small>
  )
}
