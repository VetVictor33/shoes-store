import './Header.css'
import Logo from '../../assets/logo.svg'

export default function Header() {
    return (
        <header className='Header'>
            <div className='main-title'>
                <h1>Moda masculina</h1>
                <p>sapatos sociais - casuais - esporte fino</p>
            </div>
            <img className='logo' src={Logo} alt="logo" />
        </header>
    )
}