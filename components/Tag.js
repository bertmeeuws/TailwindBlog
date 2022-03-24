import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-purplePrimary hover:text-purplePrimary dark:hover:text-purplePrimary">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
