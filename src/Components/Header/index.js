import {Link} from 'react-router-dom'
import { Container } from './styles'
import profile_icon from '../../Assets/profile_header.png'
import favorites from '../../Assets/fav.png'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import icon_categoria from '../../Assets/icon_categoria.png'
import MobileMenu from '../MobileMenu'

const Header = () => {

    const {sidebarShow, formShow, mobMenuShow} = useDynimicityContext();
    /* 
        As "li's" dentro da ul com a className submenu que serão repetidas em um map quando
        a integração com a api for feita.
    */

    return (
        <Container>

            <nav className="mobile-menu">
                <div className="menu-icon" onClick={() => mobMenuShow("none")}>
                    <div className="lineMenu"></div>
                    <div className="lineMenu"></div>
                    <div className="lineMenu"></div>
                </div>

                <MobileMenu/>
            </nav>

            <div className="logo">
                <h1>Padoca</h1>
            </div>

            <nav className="desktop-menu">
                <Link to="/">Welcome</Link>
                <span className="line"></span>
                <div className="menu">
                    <p>Menu</p>

                    <ul className="subMenu">
                        <li>
                            <Link to='/'>Categoria</Link>
                            <img src={icon_categoria} alt="categoria_icon"></img>
                        </li>

                        <li>
                            <Link to='/'>Categoria</Link>
                            <img src={icon_categoria} alt="categoria_icon"></img>
                        </li>

                        <li>
                            <Link to='/'>Categoria</Link>
                            <img src={icon_categoria} alt="categoria_icon"></img>
                        </li>

                        <li>
                            <Link to='/'>Categoria</Link>
                            <img src={icon_categoria} alt="categoria_icon"></img>
                        </li>
                    </ul>
                </div>
                <span className="line"></span>
                <Link to="/">Sobre</Link>
                <span className="line"></span>
                <Link to="/">Contato</Link>
            </nav>

            <div className="groupRight">
                <div className="buttonProfile" onClick={() => formShow("none")}>
                    <img src={profile_icon} alt="profile_access"></img>
                </div>

                <div className="buttonFavorites" onClick={() => sidebarShow("0%")}>
                    <img src={favorites} alt="favorites_access"></img>
                </div>
            </div>
        </Container>
    )
}

export default Header
