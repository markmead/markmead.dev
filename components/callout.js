const Callout = ({ emoji, children }) => {
  return (
    <div className="bg-orange-50 text-orange-800 flex rounded-lg mt-6 callout py-4">
      <span role="img" className="pl-4 pr-2 select-none text-xl">
        {emoji}
      </span>

      <div className="pr-4">{children}</div>
    </div>
  )
}

export default Callout
