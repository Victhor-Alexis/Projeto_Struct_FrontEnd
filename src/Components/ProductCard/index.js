import { Container } from "./styles"
import { useHistory } from "react-router";


const  ProductCard = ({newDimensions, product}) => {
    const history = useHistory()

    return (
        <Container onClick={()=>history.push(`/product/${product.id}`)} style={{ 
            height: newDimensions+"rem",
            width: (newDimensions * 16/17)+"rem",
            backgroundImage: `url(http://164.92.71.164${product.image_url})` }}>
            <div className="text"><span>{product.name}</span></div>
            <div className="border" style={{height: (newDimensions * 14.5/17)+"rem", width: (newDimensions * 13.5/16)+"rem", border: (newDimensions/17*12)+"px solid white"}}></div>
        </Container>
    )
}

export default ProductCard