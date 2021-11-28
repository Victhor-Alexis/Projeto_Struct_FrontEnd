import styled from "styled-components";

export const Container = styled.div`
    max-width: 25rem;
    max-height: 67.5rem;
    width: 35%;
    height: calc(100% - 5rem);
    text-align: center;
    display: inline-block;
    vertical-align: top;
    padding: 1rem 0; 

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

    /* media queries */

    @media screen and (max-width: 1580px) {
        img {
            width: 60%;
        }
    }

    @media screen and (max-width: 1220px) {
        img {
            width: 55%;
        }
    }

    @media screen and (max-width: 700px) {
        width: 90%;
        height: auto;
        border-bottom: 3px solid #161616;
        margin: 0 auto;
        display: block;
        text-align: left;

        img {
            width: 30%;
            min-width: 7.25rem;
            min-height: 7.25rem;
        }

        .infoUser {
            display: inline-block;
            text-align: left;
            vertical-align: top;
            margin: 3.6rem 0 0 1.5rem;


            h1 {
                margin: 0.5rem 0;
                font-size: 18px;
            }
        }
    }
`;