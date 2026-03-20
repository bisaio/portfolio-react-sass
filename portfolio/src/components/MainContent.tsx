import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TechnologiesContainer from './TechnologiesContainer'

export default function MainContent() {
    return (
        <main className='main-content'>
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </main>
    )
}