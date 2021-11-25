import {Link} from 'react-router-dom'
import { Container } from './styles'
import profile_icon from '../../Assets/profile_header.png'
import favorites from '../../Assets/fav.png'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import icon_categoria from '../../Assets/icon_categoria.png'
import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import { api } from "../../services/api"
import MobileMenu from '../MobileMenu'

const Header = () => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const {sidebarShow, formShow, mobMenuShow} = useDynimicityContext();

    const [categories, setCategories] = useState([])

    const fetchCategories = async () => {
        const response = await api.get('categories/index')
        console.log(response.data)
        setCategories(response.data)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

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
                        {categories.map((category,key) => (
                            <li key={key}>
                                <Link to='/'>{capitalizeFirstLetter(category.name)}</Link>
                                <img src={icon_categoria} alt="categoria_icon"></img>
                            </li>
                        ))}
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
