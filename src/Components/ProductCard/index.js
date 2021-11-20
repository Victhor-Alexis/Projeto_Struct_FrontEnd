import { Container } from "./styles"


const  ProductCard = () => {
    return (
        <Container style={{ 
            backgroundImage: `url("https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02.jpg")`  }}>
            <div className="text"><span>Product Name</span></div>
            <div className="border"></div>
        </Container>
    )
}

export default ProductCard