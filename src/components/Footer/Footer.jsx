import './Footer.css'
import Logo from '../../assets/logo.svg'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'

export default function Footer() {
    return (
        <footer className='Footer'>
            <div className='contact'>
                <p>Endereço:</p>
                <p>Rua Cubox,10</p>
                <p>Jardim Academy</p>
                <p>Salvador - Bahia-CEP 41820-021</p>
                <div className='social-media'>
                    <img src={Facebook} alt="facebook" />
                    <img src={Instagram} alt="instagram" />
                </div>
            </div>
            <hr className='vertical-line' />
            <div className='logo-div'>
                <img className='logo' src={Logo} alt="" />
            </div>
        </footer>
    )
}