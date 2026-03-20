import BoxdlettersIcon from '../img/boxdletters-icon.png'
import CostsIcon from '../img/costs-icon.png'

export default function ProjectsContainer() {
    const projects = [
        { name: "Boxdletters", link: "https://github.com/bisaio/boxdletters-project", about: "Project made with React that simulates Letterboxd using the TMDB API", img: BoxdlettersIcon },
        { name: "Costs", link: "https://github.com/bisaio/projeto-costs", about: "Project manager made with React ", img: CostsIcon }
    ]
  
    return (
        <section className="projects">
            <h2>Projects</h2>
            {projects.map(project => (
                <div className="project-card">
                    <img src={project.img} alt={project.name} />
                    <div>
                        <h3>{project.name}</h3>
                        <p>{project.about}</p>
                        <a href={project.link} className="btn" target='_blank'>See more</a>
                    </div>
                </div>
            ))}
        </section>
    )
}