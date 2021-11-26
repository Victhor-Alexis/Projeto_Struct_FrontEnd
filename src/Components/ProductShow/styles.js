import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Qwigley&display=swap');

    max-width: 65rem;
    width: 100%;
    max-height: 50rem;
    height: 80vh;
    //border: 1px solid #ccc;
    margin: 5rem auto 0 auto;
    padding: 0 4%;
   
    .header {
        display: flex;
        justify-content: space-between;
        padding: 1% 0 2% 0;

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
`;