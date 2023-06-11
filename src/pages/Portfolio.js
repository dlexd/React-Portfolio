import React from 'react';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: '',
      description: '',
      technologies: [''],
      image: '',
      liveLink: '',
      githubLink: '',
    },
    {
      id: 2,
      title: '',
      description: '',
      technologies: [''],
      image: '',
      liveLink: '',
      githubLink: '',
    },
    // Add more projects
  ];

  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        {projects.map((project) => (
          <div key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
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
