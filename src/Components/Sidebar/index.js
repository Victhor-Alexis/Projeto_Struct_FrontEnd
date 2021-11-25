import { Container } from './styles'
import {useDynimicityContext} from '../../Context/useDynimicityContext'
import ProductCard from "../ProductCard"

const Sidebar = () => {

    const {sizeSidebar, displaySidebar, sidebarShow, minWidthSide} = useDynimicityContext();

    return (
        <Container>
            <div className="smoothTransition" style={{width: sizeSidebar, minWidth:minWidthSide}}>
                <div className="wrapper" style={{display: displaySidebar}}>
                    <div className="header">
                        
                        <p>Adicionar aos favoritos</p>

                        <div className="close" onClick={() => {
                                sidebarShow("30%")
                            }}>

                            <svg width="34" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="2.70711" y1="1.29289" x2="34.7071" y2="33.2929" stroke="#F9F6F0" strokeWidth="2"/>
                                <line x1="1.29289" y1="33.2929" x2="33.2929" y2="1.29291" stroke="#F9F6F0" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>

                    <div className="deslogado" style={{display: "flex"}}>
                        <div className="boxAlert">
                            <p>Logue-se para poder adicionar seus pratos favoritos!</p>
                        </div>
                    </div>

                    <div className="logado" style={{display: "none"}}>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                        <ProductCard newHeight={6.2} newWidth={24} newFontSize={"11px"}/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Sidebar
