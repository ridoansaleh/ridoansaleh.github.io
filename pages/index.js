import Head from "next/head"
import Image from "next/image"
import { meta } from "../constants"
import profilePhoto from "../assets/profile.png"

export default function Home() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href={meta.url} />
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.og_image} />
        <meta property="og:url" content={meta.url} />
        <meta name="twitter:card" content={meta.twitter_card} />
        <meta name="twitter:site" content={meta.twitter_site} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.twitter_image} />
      </Head>

      <main className="max-w-[780px]">
        <figure className="flex flex-col md:flex-row bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 md:mt-12">
          <Image
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={profilePhoto}
            alt="Photo profile"
            width="300"
            height="412"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <p className="text-lg font-medium">
              I'm a Web Frontend Developer with expertise in React, Vue, and
              TypeScript. I have more than 5 years experience in web
              development.
            </p>

            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                Ridoan Saleh Nasution
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                Frontend Developer
              </div>
            </figcaption>
          </div>
        </figure>
      </main>
    </div>
  )
}
