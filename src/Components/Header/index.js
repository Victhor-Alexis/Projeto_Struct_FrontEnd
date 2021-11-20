import {Link} from 'react-router-dom'
import { Container } from './styles'
import profile_icon from '../../Assets/profile_header.png'
import favorites from '../../Assets/fav.png'
import { useDynimicityContext } from '../../Context/useDynimicityContext'

const Header = () => {

    const {sidebarShow} = useDynimicityContext();

    return (
        <Container>
            <div className="logo">
                <h1>Padoca</h1>
            </div>

            <nav className="desktop-menu">
                <Link to="/">Welcome</Link>
                <span className="line"></span>
                <Link to="/">Menu</Link>
                <span className="line"></span>
                <Link to="/">Sobre</Link>
                <span className="line"></span>
                <Link to="/">Contato</Link>
            </nav>

            <div className="groupRight">
                <div className="buttonProfile">
                    <img src={profile_icon} alt="profile_access"></img>
                </div>

                <div className="buttonFavorites" onClick={() => {
                        sidebarShow("0%") // enviando 0% como parâmetro para a função global
                    }}>

                    <img src={favorites} alt="favorites_access"></img>
                </div>
            </div>
        </Container>
    )
}

export default Header
