import React from 'react';

const portrait = "https://momentummill.com/kateryna.jpg";

const projects = [
  {
    name: "London Startup Events",
    description: "Founder workshops, networking, and meetups, displayed on Launch Club Capital.",
    href: "https://launchclub.capital",
    label: "launchclub.capital",
    preview: "/previews/launchclub.jpg",
  },
  {
    name: "hangby.me",
    description: "An IRL startup social network with a 500-user waitlist.",
    href: "https://hangby.me",
    label: "hangby.me",
    preview: "/previews/hangby.jpg",
  },
  {
    name: "Momentum Mill",
    description: "A GTM method of user acquisition for post-MVP founders.",
    href: "https://momentummill.com",
    label: "momentummill.com",
    preview: "/previews/momentummill.jpg",
  },
  {
    name: "Selling challenge for technical founders",
    description: "For technical founders who already have a product and need to sell it.",
    href: "https://momentummill.com/GTMSprint/",
    label: "momentummill.com/GTMSprint",
    preview: "/previews/gtm-sprint.jpg",
    upcoming: true,
  },
];

export default function App() {
  return (
    <main className="page">
      <header className="identity">
        <img
          className="portrait"
          src={portrait}
          alt="Kateryna Golushko"
          width={720}
          height={720}
        />
        <h1 className="name">Kateryna Golushko</h1>

        {/* BIO PLACEHOLDER: replace the sentence below when Kateryna sends her bio. */}
        <section className="bio-placeholder" aria-label="Biography">
          <p>A short bio will go here.</p>
        </section>

        <ul className="contact">
          <li>
            <a href="mailto:kateryna@momentummill.com">kateryna@momentummill.com</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kateryna-golushko-733a36224/"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </header>

      <section className="projects" aria-labelledby="projects-heading">
        <h2 id="projects-heading">Projects</h2>
        <ul className="project-list">
          {projects.map((project) => (
            <li className="project" key={project.href}>
              <a className="preview" href={project.href} rel="noopener noreferrer">
                <img
                  src={project.preview}
                  alt={`Homepage of ${project.name}`}
                  width={1440}
                  height={900}
                />
              </a>
              <div className="project-heading">
                <h3>{project.name}</h3>
                {project.upcoming ? <span className="upcoming">Upcoming</span> : null}
              </div>
              <p>{project.description}</p>
              <a className="project-link" href={project.href} rel="noopener noreferrer">
                {project.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
