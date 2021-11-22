import styled from "styled-components";

export const Container = styled.div`
    width: 10rem;
    height: 11rem;
    display: flex;
    flex-direction: column;
    margin: 25px;
    border-radius: 20px;
    background-color: rgba(245,227,203,0.8);
    align-items: center;

    img{
        border: 3px solid black;
        border-radius: 50%;
        height: 100px;
        width: 100px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem;
    }
    
    .info{
        text-align: center;
        justify-content: center;
    }
`