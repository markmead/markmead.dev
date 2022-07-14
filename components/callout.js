const Callout = ({ theme, children }) => {
  const emojis = {
    base: '💡',
    error: '💀',
    success: '✅'
  }

  const colors = {
    base: {
      light: 'bg-orange-50 border-orange-100 text-orange-800',
      dark: 'dark:text-orange-300 dark:bg-orange-400/20 dark:border-orange-400/30'
    },
    error: {
      light: 'bg-red-50 border-red-100 text-red-800',
      dark: 'dark:text-red-300 dark:bg-red-400/20 dark:border-red-400/30'
    },
    success: {
      light: 'bg-green-50 border-green-100 text-green-800',
      dark: 'dark:text-green-300 dark:bg-green-400/20 dark:border-green-400/30'
    }
  }

  const emoji = theme ? emojis[theme] : emojis.base

  const color = Object.values(theme ? colors[theme] : colors.base).join(' ')

  return (
    <div
      className={`flex rounded-lg border callout my-[1.5em] not-prose ${color}`}
    >
      <span className="py-2 pl-3 pr-2 select-none lg:text-xl" role="img">
        {emoji}
      </span>

      <div className="py-2 pr-4">{children}</div>
    </div>
  )
}

export default Callout
