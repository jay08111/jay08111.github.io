import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type IProps = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = (props : IProps) => {
  const { title, coverImage, date, excerpt , slug } = props

  return (
    <section className="grid grid-rows-1">
      <div className="mb-8">
        <CoverImage title={title} src={coverImage} slug={slug} isHero/>
      </div>
      <div className="md:grid md:gap-x-16 lg:gap-x-8 md:mb-28">
          <h3 className="text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    </section>
  )
}

export default HeroPost
