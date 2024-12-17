import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import heroImage from './components/Images/PXL_Bridge_AK.jpg'

export default function Page() {
  return (
   <section>
      <div className='img mb-4'>  
        <Image
        src= {heroImage}
        alt= "Picture of a bridge in the Alaskan wilderness over a rushing river. The weather is clear and it's apparent that it's a 'golden hour' photo."
        priority={true}
        quality={80}
        placeholder='blur'
        /> 
      </div>
      <a href='olsonmatthew.com'></a>
      <h1 className="text-4xl font-bold tracking-tighter">
        Matthew S. Olson 
      </h1>
      <h2 className='mb-4 text-xl font-semibold'>Marketing Technology Leader
      </h2>

      <p className="mb-2">
        {
        `Thanks for visiting! I built this website to serve as an introduction to me, my skills, and my interests. 
        Beyond just sharing information about my background and experience, 
        the site itself is intended to demonstrate learning on a tech stack that's new to me. 
        It's a headless application built using Next.js to generate dynamic content and 
        Tailwind CSS for a fast to deploy utility-first CSS framework. 
        I'm just beginning the revamp of the site, so check back often to see what's new!`
        }
      </p>
      <p className='mb-2'>
        {'December, 2024'}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
