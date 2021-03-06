import styled, { css } from 'styled-components';


export const Container = styled.div`
    height: 17rem;
    width: 16rem;
    margin: 2rem 4rem;
    position: relative;
    border-radius: 25px;
    text-align: center;
    background-size: cover;
    background-position: center;

    :hover{
        cursor: pointer;
    }

    .text{
        text-align: center;
        position: relative;
        bottom: 2rem;

    }

    .border{
        border-radius: 20px;
        background-color: transparent;
        max-width: 14.5rem;
        max-height: 13.5rem;
        min-height: 3rem;
        width: 85%;
        height: 80vw;
        border: 12px solid white;
        position: absolute;
        left:50% ;
        top: 50% ;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
`