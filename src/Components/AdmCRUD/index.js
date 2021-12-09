import { useDynimicityContext } from "../../Context/useDynimicityContext";
import { Container } from "./styles"
import AdmRenderElements from "../AdmRenderElements";
import AdmAddButton from '../AdmAddButton'
import AdmForm from '../AdmForm'

const AdmCRUD = () => {

    const {optionModel, modelItens} = useDynimicityContext();

    return (
        <Container ju={optionModel}>
            <h1 className="title">{optionModel}</h1>

            <div className="show">
                {modelItens.map((item,key) => (
                    <AdmRenderElements key={key} model={item}/>
                ))}

                <AdmAddButton/>
                <AdmForm/>
            </div>
        </Container>
    )
}

export default AdmCRUD;
