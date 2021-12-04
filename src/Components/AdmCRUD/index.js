import { useDynimicityContext } from "../../Context/useDynimicityContext";
import { Container } from "./styles"
import AdmRenderElements from "../AdmRenderElements";

const AdmCRUD = () => {

    const {optionModel, modelItens} = useDynimicityContext();

    return (
        <Container>
            <h1 className="title">{optionModel}</h1>

            <div className="show">
                {modelItens.map((item,key) => (
                    <AdmRenderElements key={key} model={item}/>
                ))}
            </div>
        </Container>
    )
}

export default AdmCRUD;
