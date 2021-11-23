import { Container } from "./styles";

const UserCard = ({user}) => {
    return (
        <Container>
            <img src="https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png" alt="profile"/>
            <div className="info">
                <span>name</span>
                <br/>
                <span>user@mail.com</span>
            </div>
        </Container>
    )
}

export default UserCard
