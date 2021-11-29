import { Container } from "./styles"

const AdminHeader = () => {
    return (
        <Container>
            <div className="sidebar">
                    
            </div>

            <div className="hideSide">
                <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.015625" y1="26" x2="32.0156" y2="26" stroke="#F9F6F0" strokeWidth="4"/>
                    <line x1="0.015625" y1="13.9998" x2="32.0156" y2="13.9998" stroke="#F9F6F0" strokeWidth="4"/>
                    <line y1="2" x2="32" y2="2" stroke="#F9F6F0" strokeWidth="4"/>
                </svg>
            </div>
        </Container>
    )
}

export default AdminHeader
