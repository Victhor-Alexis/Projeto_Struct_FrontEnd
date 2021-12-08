import styled from 'styled-components'

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

    h1 {
        padding: 0;
        display: inline-block;
        width: 44%;
        margin-bottom: 1rem;
        font-size: 21px;
    }

    .close {
        cursor: pointer;
        display: inline-block;
        margin-left: 50%;
    }

    .inputWrapper {
        padding: 1% 0;

        h2 {
            font-size: 18px;
            margin-bottom: 0.4rem;
        }

        input {
            width: 100%;
            padding: 0.5rem;
        }

        textarea {
            resize: none;
            height: 3rem;
            width: 100%;
            padding: 0.5rem;
        }
    }

    .submit {
        margin-top: 0.5rem;
        padding: 0.35rem;
        cursor: pointer;
    }

    /* Media queries */

    @media screen and (max-width: 1010px) {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .close {
            margin-left: 48%;
        }
    }

    @media screen and (max-width: 750px) {
        h1 {
            width: auto;
            font-size: 18px;
        }

        .close {
            margin-top: 0.5rem;

            svg {
                width: 28px;
                height: 28px;
            }
        }
    }

    @media screen and (max-width: 610px) {
        .close {
            margin-left: 40%;

            svg {
                width: 28px;
                height: 28px;
            }
        }
    }

    @media screen and (max-width: 530px) {
        .close {
            margin-left: 30%;

            svg {
                width: 28px;
                height: 28px;
            }
        }
    }
`;