import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    box-sizing: border-box;
    //border: 1px solid blue; 
    margin: 5rem auto;
    padding-bottom: 8rem;
    justify-content: space-around;

    /* Media queries */

    @media screen and (max-width: 440px) {
        width: 100%;
    }
`