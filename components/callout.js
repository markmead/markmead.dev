const Callout = ({ theme, children }) => {
  const THEMES = {
    default: 'bg-orange-50 border-orange-100 text-orange-800',
    error: 'bg-red-50 border-red-100 text-red-800',
    success: 'bg-green-50 border-green-100 text-green-800',
    warning: 'bg-yellow-50 border-yellow-100 text-yellow-800',
    info: 'bg-blue-50 border-blue-100 text-blue-800'
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
