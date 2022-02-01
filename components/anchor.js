import slugify from 'slugify'

const Anchor = ({ title, tag: Tag = 'h2' }) => {
  const id = slugify(title, {
    lower: true
  })

  return (
    <a className="relative prose-no-underline" href={`#${id}`}>
      <Tag className="group" id={id}>
        <span className="absolute opacity-0 -left-6 group-hover:opacity-75">
          #
        </span>

        {title}
      </Tag>
    </a>
  )
}

export default Anchor
