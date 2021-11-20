import styled from "styled-components";

export const Container = styled.footer`
    height: 5.625rem;
    width: 100%;
    background: none;
    position: absolute;
    bottom: 1.5rem;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    padding: 0 18%;
    align-items: center;
    
    p {
        color: white;
        font-size: 18px;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 18px;
    }
`;