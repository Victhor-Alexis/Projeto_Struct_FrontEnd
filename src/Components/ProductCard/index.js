import { Container } from "./styles"

const  ProductCard = ({newHeight, newWidth, newFontSize, product}) => {
    
    const newHeightBorder = newHeight - 1;
    const newWidthBorder = newWidth + 62;

    return (
        <Container style={{ 
            height: newHeight+"vw",
            width: newWidth+"%",
            backgroundImage: `url(${product.image})`  }}>
            <div className="text" style={{fontSize: newFontSize}}><span>{product.name}</span></div>
            <div className="border" style={{height: newHeightBorder+"vw", width: newWidthBorder+"%"}}></div>
        </Container>
    )
}

export default ProductCard