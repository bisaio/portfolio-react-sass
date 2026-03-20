import Avatar from '../img/avatar.jpg'
import '../styles/components/sidebar.sass'
import SocialMedia from './SocialMedia'

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <img src={Avatar} alt="bisaio" />
            <p className="title">Fullstack Developer</p>
            <SocialMedia />
            <p>Contact info</p>
            <a href="" className="btn">Download curriculum</a>
        </aside>
    )
}