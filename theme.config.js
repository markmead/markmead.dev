const YEAR = new Date().getFullYear()

export default {
  titleSuffix: ' - Mark Mead',

  footer: (
    <small class="mt-12 block">
      <time>{YEAR}</time> © Mark Mead.
    </small>
  )
}
