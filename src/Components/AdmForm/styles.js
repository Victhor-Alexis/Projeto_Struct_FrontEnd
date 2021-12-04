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
    flex-wrap: wrap;
    justify-content: space-between;
    box-shadow: 1px 1px 2px 2px #ccc;

    h1 {
        padding: 0;
        display: inline-block;
        width: 44%;
        margin-bottom: 1rem;
        font-size: 24px;
    }

    .close {
        flex: 1;
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
            height: 7rem;
            width: 100%;
        }
    }

    .submit {
        padding: 0.35rem;
        cursor: pointer;
    }
`;