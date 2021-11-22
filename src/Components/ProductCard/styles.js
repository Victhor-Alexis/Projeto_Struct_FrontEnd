import styled from "styled-components"

export const Container = styled.div`
    width:17rem;
    height: 16rem;
    margin: 2rem;
    border-radius: 25px;
    position: relative;
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
        width: 14.5rem;
        height: 13.5rem;
        border: 12px solid white;
        position: absolute;
        left:50% ;
        top: 50% ;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

    }
`