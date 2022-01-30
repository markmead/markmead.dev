const Callout = ({ theme, children }) => {
  const THEMES = {
    default:
      'bg-orange-50 border-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-400/20 dark:border-orange-400/30',
    error:
      'bg-red-50 border-red-100 text-red-800 dark:text-red-300 dark:bg-red-400/20 dark:border-red-400/30',
    success:
      'bg-green-50 border-green-100 text-green-800 dark:text-green-300 dark:bg-green-400/20 dark:border-green-400/30',
    warning:
      'bg-yellow-50 border-yellow-100 text-yellow-800 dark:text-yellow-300 dark:bg-yellow-400/20 dark:border-yellow-400/30',
    info: 'bg-blue-50 border-blue-100 text-blue-800 dark:text-blue-300 dark:bg-blue-400/20 dark:border-blue-400/30'
  }

  const EMOJIS = {
    default: '💡',
    error: '💀',
    success: '✅',
    warning: '🚨',
    info: 'ℹ️'
  }

  const COLOR = theme ? THEMES[theme] : THEMES.default
  const EMOJI = theme ? EMOJIS[theme] : EMOJIS.default

  return (
    <div className={`flex rounded-lg border callout ${COLOR}`}>
      <span role="img" className="py-2 pl-3 pr-2 text-xl select-none">
        {EMOJI}
      </span>

      <div className="py-2 pr-4">{children}</div>
    </div>
  )
}

export default Callout
