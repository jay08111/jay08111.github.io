import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type IProps = {
  title: string
  src: string
  slug?: string
  isHero?: boolean
}

const CoverImage = (props: IProps) => {
  const { title, src, slug , isHero } = props;

  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full thumbnail', {
        'hover:shadow-lg transition-shadow duration-200': slug,
        '!h-full': isHero 
      })}
      width={1300}
      height={630}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
