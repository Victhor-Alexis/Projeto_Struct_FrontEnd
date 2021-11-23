import { Container } from "./styles"

const  ProductCard = ({newHeight, newWidth, newFontSize}) => {
    
    const newHeightBorder = newHeight - 1;
    const newWidthBorder = newWidth + 62;

    return (
        <Container style={{ 
            height: newHeight+"vw",
            width: newWidth+"%",
            backgroundImage: `url("https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02.jpg")`  }}>
            <div className="text" style={{fontSize: newFontSize}}><span>Product Name</span></div>
            <div className="border" style={{height: newHeightBorder+"vw", width: newWidthBorder+"%"}}></div>
        </Container>
    )
}

export default ProductCard