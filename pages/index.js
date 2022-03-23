import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { ArrowRightIcon } from '@heroicons/react/solid'

import NewsletterForm from '@/components/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="">
        <div className="flex justify-between">
          <div>
            <img src="/static/circles.svg" className="absolute top-0 left-0 -z-10" />
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Hello, <marker className="text-purplePrimary">fellow nerd</marker>.
              </h1>
              <p className="text-lg leading-7 text-gray-600 dark:text-gray-400">
                No but seriously, welcome to my blog where I will talk about random stuff I’ve
                learnt or things that interest me.
                <br />
                <br />
                ...and you don’t have to buy me a coffee or subscribe to my newsletter.
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-4 rounded-md rounded-tr-2xl bg-purplePrimary p-5 hover:bg-blue-600">
                <span className="text-white">Show me all the blog posts</span>
                <ArrowRightIcon className="h-4 w-4 text-white" />
              </button>
              <button className="flex items-center space-x-4 rounded-md rounded-tr-2xl border-2 border-gray-400 bg-white p-5">
                <span className="text-black">Show me the latest and greatest</span>
                <ArrowRightIcon className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
          <div className="mr-10">
            <div className="relative">
              <Image
                className="rounded-md border-2 border-purplePrimary"
                src={'/static/images/me.jpeg'}
                width={'336'}
                height={'336'}
              />
              <div className="absolute top-3 left-3 -z-10 h-full w-full rounded-md border-2 border-purplePrimary"></div>
            </div>
          </div>
        </div>
        <div className="mt-16 mb-8 flex items-center justify-between">
          <h2 className="text-xl font-bold">My latest articles</h2>
          <p className="cursor-pointer text-gray-600">View all articles</p>
        </div>
        <ul className="grid grid-cols-1 gap-14 px-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {[...posts, ...posts, ...posts, ...posts, ...posts, ...posts]
            .slice(0, MAX_DISPLAY)
            .map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <Link key={slug} passHref href={`/blog/${slug}`}>
                  <li className=" relative">
                    <article className="group relative  z-10 flex flex-col space-y-8 rounded-md border border-black bg-white p-4 transition-all duration-100 hover:bg-purplePrimary group-hover:text-white">
                      <p className="font-medium text-gray-500 group-hover:text-white">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </p>
                      <div>
                        <p className="mb-2 text-3xl font-bold group-hover:text-white">{title}</p>
                        <p className="font-medium text-gray-600 group-hover:text-white">
                          {summary}
                        </p>
                      </div>
                    </article>
                    <div className="absolute left-4 top-4 h-full w-full rounded-md border-2 border-purplePrimary"></div>
                  </li>
                </Link>
              )
            })}
        </ul>
      </div>
      <div className="mt-16 mb-8 flex items-center justify-between">
        <h2 className="text-xl font-bold">Some of my projects</h2>
        <p className="cursor-pointer text-gray-600">View all articles</p>
      </div>
      <ul className="grid grid-cols-1 gap-14 px-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {posts.map((i) => {
          const { slug, date, title, summary, tags } = i
          return (
            <Link key={slug}>
              <li className=" relative">
                <article className="group relative  z-10 flex flex-col space-y-8 rounded-md border border-black bg-white p-4 transition-all duration-100 hover:bg-purplePrimary group-hover:text-white">
                  <p className="font-medium text-gray-500 group-hover:text-white">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </p>
                  <div>
                    <p className="mb-2 text-3xl font-bold group-hover:text-white">{title}</p>
                    <p className="font-medium text-gray-600 group-hover:text-white">{summary}</p>
                  </div>
                </article>
                <div className="absolute left-4 top-4 h-full w-full rounded-md border-2 border-purplePrimary"></div>
              </li>
            </Link>
          )
        })}
      </ul>

      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
