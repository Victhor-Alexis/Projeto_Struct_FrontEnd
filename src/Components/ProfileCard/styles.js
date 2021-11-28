import styled from "styled-components";

export const Container = styled.div`
    max-width: 25rem;
    max-height: 67.5rem;
    width: 35%;
    height: calc(100% - 5rem);
    text-align: center;
    display: inline-block;
    vertical-align: top;

    img {
        margin-top: 2rem;
        max-width: 20rem;
        max-height: 20rem;
        width: 75%;
        height: 18vw;
        border-radius: 50%;
        background-color: #ccc;
        display: inline-block;
    }

    .infoUser {
        text-align: center;

        h1 {
            margin: 1.5rem 0;
            font-size: 24px;
        }
    }

    // 1580 - 60%
`;