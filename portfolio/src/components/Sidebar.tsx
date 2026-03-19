import Avatar from '../img/avatar.jpg'
import '../styles/components/sidebar.sass'

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <img src={Avatar} alt="bisaio" />
            <p className="title">Developer</p>
            <p>Social media</p>
            <p>Contact info</p>
            <a href="" className="btn">Download curriculum</a>
        </aside>
    )
}