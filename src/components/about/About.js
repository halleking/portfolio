import React from 'react';
import './About.css';

function About() {
  return (
    <section id='about'>
      <div>
        <h3 className='About-Header'></h3>
        <p className='About-Paragraph'>Hello! I am an experienced game engineer based in San Diego with a strong foundation in computer science and mathematics. I graduated magna cum laude from the University of Oregon in 2019, where I earned a degree in computer science and a minor in mathematics. Although I didn’t initially plan to pursue programming, everything changed when I took my first computer science course. The challenge and satisfaction involved in writing functional code instantly captured my interest, and I quickly realized that this was the path I wanted to follow professionally.</p>
        <p className='About-Paragraph'>From that point on, I dove into learning all I could about software development, and I’ve been fortunate to build a career around my passion for creating engaging, interactive experiences. Over the years, I’ve gained hands-on experience working in the games industry, where I’ve honed my skills in coding, problem-solving, UX design, and collaborating with cross-functional teams. There’s nothing more rewarding to me than seeing an idea come to life, whether it’s through clever game mechanics or beautiful design.</p>
        <p className='About-Paragraph'>I am always excited about the opportunity to take on new challenges, push creative boundaries, and be part of a team working to create something special. I’d love to bring my skills, enthusiasm, and dedication to your next project and create experiences that users will love.</p>
        <p className='About-Paragraph'>Feel free to explore my portfolio demos for an overview of some of the projects I’ve worked on. In each of the following projects, I played a central role in both the design and development. For most of the projects, I served as the lead developer and primary code contributor. However, for FSX Pro and Wiz Royale I collaborated with small teams of 2-5 other developers.</p>
        {/* Add more content here as needed */}
      </div>
    </section>
  );
}

export default About;
