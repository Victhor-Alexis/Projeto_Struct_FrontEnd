import { Link } from "react-router-dom"
import { Container } from "./styles"
import icon_categoria from '../../Assets/icon_categoria.png'
import { useDynimicityContext } from "../../Context/useDynimicityContext"
import { useEffect, useState } from "react"
import { api } from '../../services/api'
import { useHistory } from "react-router"

const MobileMenu = () => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const {mobMenuShow, displayMobMenu, widthMobMenu, user} = useDynimicityContext()

    const [categories, setCategories] = useState([])

    const history = useHistory()

    const fetchCategories = async () => {
        const response = await api.get('categories/index')
        setCategories(response.data) 
    }

    const goToCategory = () => {
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <Container style={{display: displayMobMenu, width: widthMobMenu}}>

            <div className="head">
                <div className="close">
                    <svg onClick={() => mobMenuShow("block")} width="34" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2.70711" y1="1.29289" x2="34.7071" y2="33.2929" stroke="#F9F6F0" strokeWidth="2"/>
                        <line x1="1.29289" y1="33.2929" x2="33.2929" y2="1.29291" stroke="#F9F6F0" strokeWidth="2"/>
                    </svg>
                </div>
            </div>

            <ul>
                <li className="menu">

                    <p>Menu</p>

                    <div className="arrow">
                        <svg width="24" height="12" viewBox="0 0 64 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.707107" y1="1.29289" x2="32.7071" y2="33.2929" stroke="#444c54" strokeWidth="2"/>
                            <line x1="31.2929" y1="33.2929" x2="63.2929" y2="1.29291" stroke="#444c54" strokeWidth="2"/>
                        </svg>
                    </div>       
                </li>

                <ul className="subMenu">
                    {categories.map((category,key) => (
                                <li key={key}>
                                    <Link to={`/category/${category.id}`}
                                        onClick={() => {mobMenuShow("block")}}>{capitalizeFirstLetter(category.name)}</Link>
                                    <img src={icon_categoria} alt="categoria_icon"></img>
                                </li>
                    ))}
                </ul>             

                <li><Link to="/">Sobre</Link></li>
                <li><Link to="/">Contatos</Link></li>
            </ul>
        </Container>
    )
}

export default MobileMenu
