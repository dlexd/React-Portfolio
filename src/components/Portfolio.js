import React from 'react';

function Portfolio() {
    const applications = [
      {
        title: 'Application 1',
        image: 'App Image',
        deployedLink: 'Link to deployed app',
        githubLink: 'Link to Github'
      },
    ];
  
    return (
      <section>
        <h2>Portfolio</h2>
        <div>
          {applications.map((application, index) => (
            <div key={index}>
              <h3>{application.title}</h3>
              <img src={application.image} alt={application.title} />
              <div>
                <a href={application.deployedLink}>Deployed App</a>
                <a href={application.githubLink}>GitHub Repo</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

export default Portfolio;