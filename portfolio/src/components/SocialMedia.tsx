import '../styles/components/socialmedia.sass'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socialMedia = [
    { name: "linkedin", icon: <FaLinkedin />, link: "https://br.linkedin.com/in/guilherme-silva-bisaio-1b0306268" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/bisaio" }
]

export default function SocialMedia() {
    return (
        <section className='social-media'>
            {socialMedia.map((social) => (
                <a
                    key={social.name}
                    id={social.name}
                    href={social.link}
                    target='_blank'
                    className='social-btn'>
                    {social.icon}
                </a>
            ))}
        </section>
    )
}