import Image from "next/image";
import React from 'react'
import { Timeline } from './ui/timeline'

const TimeLine = () => {
    const data = [
        {
            title: "2024 - Present",
            content: (
          <div>
          <h1 className="text-white text-2xl mb-8">
            Joined GreatSoft as a offsite consultant
          </h1>
          <p className="text-secondary-light mb-8">
          As an offsite support consultant at GreatSoft, I specialize in providing expert
          assistance with their software, focusing on user training, database corrections, 
          and resolving inquiries with precision and care. In this role, I frequently leverage 
          SQL to address complex data issues, ensuring seamless operations and client satisfaction.
          </p>
          <p className="text-secondary-light mb-8">
          This position has offered me an in-depth understanding of enterprise software, allowing 
          me to delve into its design and structure. By working closely with clients and navigating
          real-world challenges, I have gained valuable insights into how such systems are architected, 
          maintained, and optimized for scalability. This experience has not only strengthened my technical 
          skills but also deepened my appreciation for the critical role enterprise software plays in driving 
          organizational success.
          </p>
          <p className="text-secondary-light mb-8">
          Through my contributions, I've honed a problem-solving mindset and a keen eye for detail, striving 
          to deliver solutions that are both reliable and impactful. Along the way, I’ve been honored to be 
          recognized by my peers as MVP and nominated for the Customer Satisfaction Award—acknowledgments that 
          reflect my commitment to excellence and the value I aim to bring to every interaction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://greatsoft.co.za/" target="_blank" rel="noopener noreferrer">
              <Image
                  src="/images/GS.png"
                  alt="GreatSoft Logo"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-auto w-full"
                />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2021 - 2023",
      content: (
        <div>
          <h1 className="text-white text-2xl mb-8">
            Completed BSc IT degree
          </h1>
          <p className="text-secondary-light mb-8">
          From 2020 to 2023, I pursued a Bachelor of Science in Information Technology, graduating Magna Cum Laude. 
          This degree was an incredible opportunity to dive deep into software development and explore the foundations 
          of IT. Throughout the program, I gained hands-on experience in programming with Java, C#, and Python, 
          sharpening my ability to build and optimize software solutions.
          </p>
          <p className="text-secondary-light mb-8">
          The curriculum focused heavily on practical development skills, including designing software, creating mobile and 
          web applications, and mastering database systems. Courses like Object-Oriented Systems Analysis and Design and 
          Web Development taught me how to craft user-centered applications, while projects like mobile app development 
          allowed me to bring ideas to life and solve real-world challenges.
          </p>
          <p className="text-secondary-light mb-8">
          I also explored critical topics like usability engineering, cloud technologies, and network security, which gave 
          me a broader understanding of how to create scalable and secure systems. This journey not only strengthened my 
          technical expertise but also nurtured essential problem-solving and teamwork skills, which I bring into every 
          project I work on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/images/WJ_Buys_BSc_Cert.png" target="_blank" rel="noopener noreferrer">
              <Image
                  src="/images/WJ_Buys_BSc_Cert.png"
                  alt="GreatSoft Logo"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-auto w-full"
                />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2020",
      content: (
        <div>
          <h1 className="text-white text-2xl mb-8">
            Completed HCert in Information Systems
          </h1>
          <p className="text-secondary-light mb-8">
          In 2019, I embarked on my Higher Certificate in Information Systems, a pivotal year that introduced me to the world 
          of programming and database design. During this time, I developed my skills in Java, C#, and SQL Server, focusing on 
          building applications from the ground up and designing functional database solutions.
          </p>
          <p className="text-secondary-light mb-8">
          The program emphasized practical, hands-on learning. From creating applications to solving programming logic challenges, 
          I gained valuable experience in writing clean, efficient code and troubleshooting technical issues. One highlight was 
          exploring mobile development, where I began to understand the potential of modern technology to connect users to 
          innovative solutions.
          </p>
          <p className="text-secondary-light mb-8">
          When COVID-19 disrupted the learning environment in 2020, it became an opportunity to adapt and grow. Transitioning to 
          remote studies taught me the importance of resilience and self-discipline, helping me stay on track despite the challenges. 
          My hard work paid off as I graduated Magna Cum Laude, a testament to my commitment and passion for software development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/images/WJ_Buys_HCert_Cert.png" target="_blank" rel="noopener noreferrer">
              <Image
                  src="/images/WJ_Buys_HCert_Cert.png"
                  alt="GreatSoft Logo"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-auto w-full"
                />
            </a>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className='w-full'>
        <Timeline data={data}/>
    </div>
  )
}

export default TimeLine