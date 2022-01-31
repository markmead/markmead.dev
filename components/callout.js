const Callout = ({ theme, children }) => {
  const THEMES = {
    base: 'bg-orange-50 border-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-400/20 dark:border-orange-400/30',
    error:
      'bg-red-50 border-red-100 text-red-800 dark:text-red-300 dark:bg-red-400/20 dark:border-red-400/30',
    success:
      'bg-green-50 border-green-100 text-green-800 dark:text-green-300 dark:bg-green-400/20 dark:border-green-400/30'
  }

  const EMOJIS = {
    base: '💡',
    error: '💀',
    success: '✅'
  }

  const COLOR = theme ? THEMES[theme] : THEMES.base
  const EMOJI = theme ? EMOJIS[theme] : EMOJIS.base

  return (
    <div className={`flex rounded-lg border callout ${COLOR}`}>
      <span role="img" className="py-2 pl-3 pr-2 select-none lg:text-xl">
        {EMOJI}
      </span>

      <div className="py-2 pr-4">{children}</div>
    </div>
  )
}

export default Callout
