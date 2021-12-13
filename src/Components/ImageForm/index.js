import { Container } from "./styles"
import { useHistory } from "react-router";
import { useDynimicityContext } from "../../Context/useDynimicityContext";
import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';





const  ImageForm = () => {

    const {admFormShow, 
        selectedItemId,
        managementOption, displayImageForm} = useDynimicityContext();

    const [imageFile, setImageFile] = useState([]);

    useEffect(() => {
        
    }, [selectedItemId])

    const add_imageFile = async (event) => {
        
        event.preventDefault();

        try{
            const formData = new FormData(); 
            formData.append('imageFile[]', imageFile[0]);
            const response = await api.post(`products/add_imageFile/${selectedItemId}`, formData)
            alert(response.data)
            if(response.data){
                alert("imagem editada");
                setImageFile(response.data);
            }
        }catch(erro){
            alert(erro)
        }
    };
    


    return (
        <Container onSubmit={add_imageFile} style ={{display: displayImageForm[0], opacity: displayImageForm[1]}}>
             <div className="close" onClick={() => {admFormShow(true, -1, "Imagem"); managementOption("Produtos")}}>
                <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.70711" y1="1.29289" x2="34.7071" y2="33.2929" stroke="#161616" strokeWidth="2"/>
                    <line x1="1.29289" y1="33.2929" x2="33.2929" y2="1.29289" stroke="#161616" strokeWidth="2"/>
                </svg>
            </div>

            <h1>editar imagens:</h1>
            <p>{selectedItemId}</p>
            <input placeholder='foto' name='file' id='file' type="file" onChange={(event) => setImageFile(event.target.files)}/> 
            <button className="submit" type="submit">editar imagem</button>
        </Container>
    )
}

export default ImageForm