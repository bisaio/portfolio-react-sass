import { DiHtml5, DiCss3, DiPhp, DiPostgresql, DiReact, } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'
import '../styles/components/technologiescontainer.sass'

const technolgies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "ts", name: "TypeScript", icon: <SiTypescript /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "php", name: "PHP", icon: <DiPhp /> },
    { id: "postgresql", name: "PostgreSQL", icon: <DiPostgresql /> },
]

export default function TechnologiesContainer() {
    return (
        <section className='technologies'>
            <h2>Technologies</h2>
            <div className='tech-grid'>
                {technolgies.map((tech) => (
                    <div id={tech.id} key={tech.id} className='tech-card'>
                        <div className="icon-container">
                            {tech.icon}
                        </div>
                        <div className='tech-info'>
                            <h3>{tech.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}