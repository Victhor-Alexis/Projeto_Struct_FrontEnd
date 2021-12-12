import styled from "styled-components";

export const Container = styled.form`

    transition: 0.3s;
    width: 65%;
    height: 100%;
    left: 30%;
    top: 5%;
    max-height: 83vh;
    background-color: white;
    position: fixed;
    z-index: 1;
    padding: 2%;
    justify-content: space-between;
    box-shadow: 1px 1px 2px 2px #ccc;
    z-index: 2;
    min-width: 18rem;
    .close{

        svg{
            cursor: pointer;
        }

    }
`