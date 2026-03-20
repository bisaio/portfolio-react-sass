import Avatar from '../img/avatar.jpg'
import '../styles/components/sidebar.sass'
import ContactInfo from './ContactInfo'
import SocialMedia from './SocialMedia'

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <img src={Avatar} alt="bisaio" />
            <p className="title">Fullstack Developer</p>
            <SocialMedia />
            <ContactInfo />
            <a href="" className="btn">Download curriculum</a>
        </aside>
    )
}