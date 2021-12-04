import styled from 'styled-components'

export const Container = styled.div`
    width: 65%;
    height: auto;
    min-height: 75%;
    background-color: white;
    position: absolute;
    left: 30%;
    top: 17%;
    padding-bottom: 10%;

    h1 {
        width: 100%;
        padding: 2rem 0 3rem 3rem;
    }

    .show {
        display: flex;
        flex-wrap: wrap;
        width: 95%;
        margin: 0 auto;
        justify-content: space-around;
    }
`;