import styled from "styled-components";

export const Container = styled.div`
    width: 65%;
    min-height: calc(100% - 6rem);
    display: inline-flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .teste {
        max-width:17rem;
        max-height: 16rem;
        width: 25%;
        height: 16vw;
        min-height: 4rem;
        margin: 2rem 4%;
        position: relative;
        border-radius: 25px;
        text-align: center;
        background-size: cover;
        background-color: #ccc;
    }
`;