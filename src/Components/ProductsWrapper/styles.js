import styled from "styled-components";

export const Container = styled.div`
    width: 65%;
    min-height: calc(100% - 6rem);
    display: inline-flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 2rem;

    .teste {
        max-width:17rem;
        max-height: 16rem;
        min-width: 7rem;
        min-height: 7rem;
        width: 25%;
        height: 16vw;
        margin: 2rem 4%;
        position: relative;
        border-radius: 25px;
        text-align: center;
        background-size: cover;
        background-color: #ccc;
    }

    /* Media queries */ 

    @media screen and (max-width: 700px) {
        width: 100%;

        .teste {
            width: 20%;
        }
    }
`;