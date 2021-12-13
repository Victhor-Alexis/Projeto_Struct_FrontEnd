import {Link} from 'react-router-dom'
import { Container } from './styles'
import profile_icon from '../../Assets/profile_header.png'
import favorites from '../../Assets/fav.png'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import icon_categoria from '../../Assets/icon_categoria.png'
import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import { api } from "../../services/api"
import { useHistory } from 'react-router'
import logoutImg from '../../Assets/exit.png'
import adminIcon from '../../Assets/adminIcon.png'

const Header = ({background, fontColor, position, bottom, profileBlack, 
                 hoverEffect, topSubmenu, colorSubmenu}) => {
                     

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const history = useHistory()

    const {sidebarShow, formShow, mobMenuShow, user, logout} = useDynimicityContext();

    const [categories, setCategories] = useState([])

    const fetchCategories = async () => {
        const response = await api.get('categories/index')
        setCategories(response.data)
        
    }

    const logoutHome = () => {
        history.push("/");
        logout();
    }

    const isUserAdmin = () => {
        if(user){
            if(user.is_admin){
                return(
                    <div>
                        <div className="buttonAdmin" onClick={() => history.push(`/AdminPanel`)}>
                            <img src={adminIcon} alt="admin"></img>
                        </div> 
                        <div className="buttonProfile" onClick={() => history.push(`/profile`)}>
                            <img src={realProfileIcon} alt="profile_access"></img>
                        </div> 
                    </div>
                )
            }
            return (
                <div className="buttonProfile" onClick={() => history.push(`/profile`)}>
                    <img src={realProfileIcon} alt="profile_access"></img>
                </div> 
            )
        }else{
            return(
                <div className="buttonProfile" onClick={() => formShow("none")}>
                        <img src={realProfileIcon} alt="profile_access"></img>
                </div>
            )
        }
}



    useEffect(() => {
        fetchCategories()
    }, [])

    /* 
        As "li's" dentro da ul com a className submenu que serão repetidas em um map quando
        a integração com a api for feita.
    */

    /* Alteração do componente quando é chamado nas outras páginas -- fica sem background e com a font preta */

    let realProfileIcon = profile_icon;

    if (profileBlack !== undefined) { 
        // alterando ícone do perfil, que ficará preto
        realProfileIcon = profileBlack; 
    }

    /* * * * */

    return (
        <Container style={{
            background: background,
            position: position,
            bottom: bottom,}}>

            <nav className="mobile-menu">
                <div className="menu-icon" onClick={() => mobMenuShow("none")}>
                    <div className="lineMenu" style={{border: "2px solid "+fontColor}}></div>
                    <div className="lineMenu" style={{border: "2px solid "+fontColor}}></div>
                    <div className="lineMenu" style={{border: "2px solid "+fontColor}}></div>
                </div>

            </nav>

            <div className="logo">
                <h1 onClick={() => history.push(`/`)} style={{color: fontColor}}>Padoca</h1>
            </div>
            
            <nav className="desktop-menu">
                <Link to="/" style={{color: fontColor}} className={hoverEffect}>Welcome</Link>
                <span className="line" style={{border: "1px solid "+fontColor}}></span>
                <div className={"menu "+hoverEffect}>
                    <p style={{color: fontColor}}>Menu</p>

                    <ul className="subMenu" style={{top: topSubmenu, backgroundColor: colorSubmenu}}>                         
                        {categories.map((category,key) => (
                            <li className={hoverEffect} key={key}>
                                <Link to={`/category/${category.id}`} style={{color: fontColor}}>{capitalizeFirstLetter(category.name)}</Link>
                                <img src={icon_categoria} alt="categoria_icon"></img>
                            </li>
                        ))}
                    </ul>
                </div>
                <span className="line" style={{border: "1px solid "+fontColor}}></span>
                <Link to="/" style={{color: fontColor}} className={hoverEffect}>Sobre</Link>
                <span className="line" style={{border: "1px solid "+fontColor}}></span>
                <Link to="/" style={{color: fontColor}} className={hoverEffect}>Contato</Link>
            </nav>

            <div className="groupRight">
                {isUserAdmin()}
                <div className="buttonFavorites" onClick={() => sidebarShow("0%")}>
                    <img src={favorites} alt="favorites_access"></img>
                </div>
                
                {user?
                <div className="buttonLogout" onClick={() => logoutHome()}>
                    <img src={logoutImg} alt="logout"></img>
                </div>
                :
                null}
            </div>
        </Container>
    )
}

export default Header
