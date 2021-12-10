import styled from 'styled-components'

export const Container = styled.header`
    width: 75%;
    height: 5rem;
    background-color: #C4AE78;
    display: inline-flex;
    align-items: center;
    padding: 0 3%;
    position: relative;
    margin-left: 25%;
    justify-content: space-between;
    
    .hideSide {
        cursor: pointer;
        display: none;
    }

    .exit {
        cursor: pointer;
        width: 2.4rem;
        height: 2.4rem;
        margin-top: -0.45rem;

        img {
            width: 100%;
            height: 100%;
        }
    }

    /* Media queries */

    @media screen and (min-width: 1780px) {
        width: calc(100% - 28rem);
        margin-left: 28rem;
    }

    @media screen and (max-width: 1024px) {
        margin-left: 16rem;
        width: calc(100% - 16rem);
    }

    @media screen and (max-width: 530px) {
        width: 100%;
        margin-left: 0;

        .hideSide {
            display: block;
        }
    }
`;