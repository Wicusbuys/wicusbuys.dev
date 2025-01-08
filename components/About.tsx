import React from 'react'

const About = () => {
  return (
    <div className="grid gap-y-28 text-white max-w-7xl mb-24 px-8 mx-auto md:grid-cols-2 md:mt-24">
        <div  className='text-6xl lg:text-8xl'>
          <h1>Thoughtful</h1>
          <h1>Innovative</h1>
          <h1>Intuitive</h1>
          <h1>Useful</h1>
        </div>
        <div className='text-xl md:row-start-2 md:col-start-2 md:text-2xl'>
          <p>These values shape my approach to creating solutions that are both impactful and meaningful. 
            I take a thoughtful, user-centered approach to every project, ensuring that I understand the problems 
            I&apos;m solving and the needs of the people I&apos;m designing for. My passion for innovation keeps me exploring 
            new tools, techniques, and perspectives, which allows me to create solutions that go beyond just fixing 
            problems—I strive to make things better. I&apos;m driven by the idea that good solutions should not only work 
            but enhance the experience, whether it&apos;s a user interface, an app, or a system. This mindset leads me to 
            build intuitive solutions that feel natural to use and make life easier.
            </p>
        </div>
        <div className='text-xl md:row-start-3 md:text-2xl'>
          <p>My drive to build solutions comes from my curiosity about how things work and my desire to improve them. 
            Whether it&apos;s fixing furniture, computers, or finding more efficient ways to complete everyday tasks, I enjoy 
            the challenge of tinkering with ideas and refining them to perfection. It&apos;s not just about getting things to 
            function—it&apos;s about leaving them in a better state than before. This approach fuels my work as a developer, 
            where I constantly seek to apply what I&apos;ve learned to craft reliable, polished solutions that provide real value. 
            For me, the process of building and improving is as rewarding as the result itself, and I&apos;m committed to delivering 
            work that exceeds expectations.
          </p>
      </div>
    </div>
  )
}

export default About