import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { api } from '../../services/api'
import Header from "../../Components/Header"

const Category = () => {


    // Backend ainda n está pronto, os métodos da model de produtos n estão funcionando
    const [categories, setCategories] = useState([]) 

    const fetchByCategory = async () => {
        const response = await api.get('categories/index')
        console.log(response.data)
        const result = response.data.filter(item => item.name == 'salgado')
        console.log(result)
        setCategories(result)}
    

    useEffect(() => {
        fetchByCategory()
        console.log(categories)
    }, [])

    return (
        <Header/>
    )
}

export default Category
