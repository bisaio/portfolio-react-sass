import { AiOutlineMail } from 'react-icons/ai'
import '../styles/components/contactinfo.sass'

export default function ContactInfo() {
    return (
        <section className='info'>
            <div className='info-card'>
                <AiOutlineMail className='email-icon' />
                <div>
                    <h3>E-mail</h3>
                    <p>gsbisaio@gmail.com</p>
                </div>
            </div>
        </section>
    )
}