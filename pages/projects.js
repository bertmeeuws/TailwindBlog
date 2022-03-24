import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="">
        <img src="/static/circles.svg" className="absolute top-0 left-0 -z-10" />
        <img src="/static/circles.svg" className="absolute top-0 left-0 -z-10" />
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-purplePrimary dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className="text-black">My</span> projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            These are links to my project repositories.
          </p>
        </div>
        <div className="flex justify-center py-12">
          <div className="-m-4 grid grid-cols-1 gap-10 px-4 md:grid-cols-2 md:p-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
