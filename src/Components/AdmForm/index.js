import React, { useState, useEffect } from 'react'
import { useDynimicityContext } from '../../Context/useDynimicityContext'
import { api } from '../../services/api';
import { Container } from './styles'
import Select from 'react-select'

const AdmForm = () => {

    const {optionCrud, optionModel, displayAdmForm, admFormShow, 
           selectedItemId, modelForm, formKind, realOptionModel,
           managementOption} = useDynimicityContext();

    const [name, setName] = useState("")
    const [price, setPrice] = useState(-1)
    const [categories, setCategories] = useState([])
    const [AllCategories, setALLCategories] = useState([])
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [imageFile, setImageFile] = useState([])
    const [options, setOptions] = useState([])
    const [multiops, setMultiops] = useState([])


    const fetchALLCategories = async () => {
        const response = await api.get('categories/index')
        setALLCategories(response.data)
        console.log(response.data)

        const ops = AllCategories.map(item => {
            return {
                label: item.name,
                value: item.id     
            }
        })

        setOptions(ops)
                
    }

    useEffect(() => {
        fetchALLCategories()
    }, [categories])

    // const handleMultiChange = (ops) => {
    //     setMultiops(ops)
    //     console.log("multiops = " + multiops)
    //   }

    useEffect(() => {

        const fetchValues = async () => {
            const response = await api.get(`${realOptionModel}/show/${selectedItemId}`)
            //onsole.log(response.data)
            setName(response.data.name)
            
            if (realOptionModel === 'products') {
                setPrice(response.data.price)
                setCategories(response.data.categories)
                setDescription(response.data.description)
                setImage(response.data.image_url)
            }
        }

        if (selectedItemId !== -1)
            fetchValues()
    }, [selectedItemId, optionCrud])

    const selectSubmitType = () => {
        if (optionCrud === 'Editar') {
            return updateModel;
        }
        else if(optionCrud === 'Deletar') {
            return deleteModel;
        }
        else if(optionCrud === 'Adicionar') {
            return createModel;
        }
    }

    const createModel = async (event) => {
        //console.log(realOptionModel, selectedItemId)

        let objectParameter = {};

        switch (realOptionModel) {
            case 'categories':
                objectParameter = {
                    category: {
                        name
                    }
                }
            break;

            case 'products':
                objectParameter = {
                    product: {
                        name,
                        price,
                        description
                    }
                }
            break;
        }

        event.preventDefault();
        await api.post(`${realOptionModel}/create`, objectParameter).then((response) => alert(name+" criadoo(a)!"));
        
    }

    const updateModel = async (event) => {
        //console.log(realOptionModel, selectedItemId)

        let objectParameter = {};

        switch (realOptionModel) {
            case 'categories':
                objectParameter = {
                    category: {
                        name
                    }
                }
            break;

            case 'products':
                objectParameter = {
                    product: {
                        name,
                        price,
                        description
                    },
                    product_multiops: multiops
                }
            break;
        }

        event.preventDefault();
        
        await api.patch(`${realOptionModel}/update/${selectedItemId}`, objectParameter).then((response) => alert(name+" editado(a)!"))
        
    }

    const deleteModel = async (event) => {
        event.preventDefault();
        console.log("entrou em deleteModel" + realOptionModel, selectedItemId)
        await api.delete(`${realOptionModel}/delete/${selectedItemId}`).then((response) => alert(name+" deletado!"))
    }

    const add_imageFile = async () => {
        
        console.log("entrou em add_imageFile")

        try{
            const formData = new FormData() 
            formData.append('imageFile[]', imageFile[0])
            const response = await api.post(`products/add_imageFile/${selectedItemId}`, formData)
            if(response.data){
                alert("imagem editada");
                setImageFile(response.data);
            }
        }catch(erro){
            alert(erro)
        }
    }

    // Existe a opção de fazer um form para cada opção do crud. Ia ficar mais organizado
    // que a forma que fiz aqui, mas teria mais componentes e trechos repetidos.

    return (
        <Container style={{display: displayAdmForm[0], opacity: displayAdmForm[1]}} onSubmit={selectSubmitType()}>
            <h1>{optionCrud} {optionModel.toLowerCase()}</h1>

            <div className="close" onClick={() => {admFormShow(true, -1, ""); managementOption(optionModel)}}>
                <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.70711" y1="1.29289" x2="34.7071" y2="33.2929" stroke="#161616" strokeWidth="2"/>
                    <line x1="1.29289" y1="33.2929" x2="33.2929" y2="1.29289" stroke="#161616" strokeWidth="2"/>
                </svg>
            </div>

            <div className="edit_or_add" style={{display: formKind[0]}}>
                <div className="inputWrapper">
                    <h2>Nome:</h2>
                    <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>

                <div className="inputWrapper" style={{display: modelForm[0]}}>
                    <h2>Preço:</h2>
                    <input type="text" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                </div>

                <div className="inputWrapper" style={{display: modelForm[0]}}>
                    <h2>Descrição:</h2>
                    <input type="text" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </div>

                <div className="inputWrapper" style={{display: modelForm[0]}}>
                    <h2>Categorias</h2>
                    <Select
                        className='search-line'
                        placeholder='Search...'
                        value = {multiops}
                        options={options}
                        onChange={(event) => setMultiops(event)}
                        isMulti
                    />
                </div>

                <div className="inputWrapper" style={{display: modelForm[1]}}>
                    <h2>Email:</h2>
                    <input type="text"/>
                </div>

                
            </div>

            <div className="delete" style={{display: formKind[1]}}>
                <h1>Tem certeza que deseja deletar?</h1>
            </div>

            <input className="submit" value={optionCrud} type="submit"/>
        </Container>
    )
}


export default AdmForm
