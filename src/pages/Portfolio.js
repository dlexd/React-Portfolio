import React from 'react';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Password Generator',
      description: 'Generates a random password based on user-selected criteria.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://camo.githubusercontent.com/f0c4eec27315c68f5dd0aeb613722b5adffdeb1b06515727f90d31f37b82b4c8/68747470733a2f2f692e696d6775722e636f6d2f36664c374859522e706e67',
      liveLink: 'https://dlexd.github.io/Password-Generator/',
      githubLink: 'https://github.com/dlexd/Password-Generator',
    },
    {
      id: 2,
      title: 'Work Day Scheduler',
      description: 'A simple application that gives the user the ability to save events for each hour of the day.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://camo.githubusercontent.com/0a73d2b9df2841d35eed2d95112402a2e2d67b831941458724b0cc88863ee35b/68747470733a2f2f692e696d6775722e636f6d2f564774513238532e706e67',
      liveLink: 'https://dlexd.github.io/Work-Day-Scheduler/',
      githubLink: 'https://github.com/dlexd/Work-Day-Scheduler',
    },
    // Add more projects
  ];

  return (
    <section id="portfolio" className="bg-black flex justify-center items-center">
      <div className="portfolio-container text-white p-8">
        {projects.map((project) => (
          <div key={project.id} className="max-w-xl mx-auto bg-base-200 text-white p-8 mb-8">
            <img src={project.image} alt={project.title} className="w-full max-w-[768px] rounded-lg" />
            <div className="mt-8 text-center">
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
              <p className="text-white text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-6 justify-center">
                {project.technologies.map((technology) => (
                  <span key={technology} className="badge badge-success">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-6 space-x-4">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-success">
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-success">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
