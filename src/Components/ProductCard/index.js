import { useHistory } from "react-router";
import { Container } from "./styles"

const  ProductCard = ({newHeight, newWidth, newFontSize, product}) => {
    
    const newHeightBorder = newHeight - 1;
    const newWidthBorder = newWidth + 62;
    console.log(product)

    const history = useHistory()

    return (
        <Container style={{ 
            height: newHeight+"vw",
            width: newWidth+"%",
            backgroundImage: `url(http://localhost:3000${product.image_url})` }}>
            <div onClick={()=>history.push(`/product/${product.id}`)} 
            className="text" style={{fontSize: newFontSize}}><span>{product.name}</span></div>
            <div className="border" style={{height: newHeightBorder+"vw", width: newWidthBorder+"%"}}></div>
        </Container>
    )
}

export default ProductCard