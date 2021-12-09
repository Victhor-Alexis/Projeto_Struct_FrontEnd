import { Container } from "./styles"
import { Link } from 'react-router-dom'
import exit from '../../Assets/exit.png'
import { useDynimicityContext } from "../../Context/useDynimicityContext"

const AdminHeader = () => {

    const {showAdmSidebar} = useDynimicityContext();

    return (
        <Container>
            <div className="hideSide" onClick={() => showAdmSidebar(false)}>
                <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.015625" y1="26" x2="32.0156" y2="26" stroke="#F9F6F0" strokeWidth="4"/>
                    <line x1="0.015625" y1="13.9998" x2="32.0156" y2="13.9998" stroke="#F9F6F0" strokeWidth="4"/>
                    <line y1="2" x2="32" y2="2" stroke="#F9F6F0" strokeWidth="4"/>
                </svg>
            </div>

            <Link to='/' className="exit">
                <img src={exit} alt="exit_admin_panel" />
            </Link>
        </Container>
    )
}

export default AdminHeader
