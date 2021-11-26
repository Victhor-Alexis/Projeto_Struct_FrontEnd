import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { api } from '../../services/api'
import Header from "../../Components/Header"
import ProductCard from "../../Components/ProductCard"

const Category = () => {

    let { id } = useParams()
    
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await api.get(`/categories/my_products/${id}`)
        console.log(response.data)
        setProducts(response.data)}
    

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <>
        {products.map((product,key) => (
            // os produtos ainda n tem foto
            <ProductCard product={product}/>
        ))}
        <Header/>
        </>
    )
}

export default Category