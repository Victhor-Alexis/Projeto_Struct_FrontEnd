import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Qwigley&display=swap');

    max-width: 65rem;
    width: 100%;
    max-height: 50rem;
    height: 80vh;
    //border: 1px solid #ccc;
    margin: 0 auto;
    padding: 0 4%;
   
    .header {
        display: flex;
        justify-content: space-between;
        padding: 8% 0 2% 0;

        h1 {
            font-family: 'Qwigley', cursive;
            font-size: 48px;
            font-weight: normal;
        }

        img {
            width: 42px;
        }
    }

    .produtoPhoto{
        width: 100%;
        height: 60%;
    }

    p {
        margin-top: 4rem;
        text-align: center;
        font-size: 48px;
        font-family: 'Qwigley', cursive;
    }

    /* Media queries */

    @media screen and (max-height: 900px) {
        .header {
            padding: 6% 0 2% 0;

            h1 {
                font-size: 36px;
            }
        }

        p {
            font-size: 36px;
            margin-top: 3rem;
        }
    }

    @media screen and (max-height: 768px) {
        .header {
            padding: 3% 0 2% 0;
        }

        p {
            margin-top: 2rem;
        }
    }

    //////////////////// Width

    @media screen and (max-width: 1440px) {
        width: 60%;
    }

    @media screen and (max-width: 1024px) {
        height: 60vh;
    }

    @media screen and (max-width: 768px) {
        .header {
            padding: 10% 0 0 0;

            h1 {
                font-size: 24px;
            }

            img {
                width: 24px;
                margin-bottom: 1rem;
            }
        }

        p {
            font-size: 24px;
        }
    }

    @media screen and (max-width: 580px) {
        height: 55vh;

        .header {
            padding: 16% 0 0 0;

            h1 {
                font-size: 21px;
            }
        }
    }

    @media screen and (max-width: 411px) {
        width: 80%;

        .header {
            padding: 20% 0 0 0;
        }
    }
`;