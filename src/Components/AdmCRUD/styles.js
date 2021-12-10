import styled from 'styled-components'

export const Container = styled.div`
    width: 65%;
    height: auto;
    min-height: 75%;
    background-color: white;
    position: absolute;
    left: 30%;
    top: 17%;
    padding-bottom: 10%;
    display: ${props => props.ju != "" ? "block" : "none"};

    h1 {
        width: 100%;
        padding: 2rem 0 3rem 3rem;
    }

    .show {
        display: flex;
        flex-wrap: wrap;
        width: 95%;
        margin: 0 auto;
        justify-content: space-around;
    }

    /* Media queries */

    @media screen and (min-width: 1800px) {
        left: 34rem;
    }

    @media screen and (max-width: 1024px) {
        margin-left: 1rem;
        position: relative;
        top: 6%;
        left: 30%;
    }

    @media screen and (max-width: 900px) {
        margin-left: 2rem;
    }

    @media screen and (max-width: 770px) {
        max-width: 20rem;
        left: 40%;

        h1 {
            text-align: center;
            padding: 2rem 0 3rem 0;
        }
    }

    @media screen and (max-width: 600px) {
        max-width: 16rem;
        left: 45%;
    }

    @media screen and (max-width: 535px) {
        left: 0;
        margin: 0 auto;
        min-width: 90%;
    }
`;