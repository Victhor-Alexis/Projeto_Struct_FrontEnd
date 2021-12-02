import styled from 'styled-components'

export const Container = styled.div`
    width: 65%;
    height: auto;
    min-height: 75%;
    background-color: white;
    position: absolute;
    left: 30%;
    top: 17%;

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

    .options {
        width: 70%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding-bottom: 1rem;

        img {
            width: 24px;
            cursor: pointer;
        }

        @keyframes rotate {
                0%   {top: 0}
                50%  {top: -0.4rem}
                100% {top: 0}
            }

        img:hover {
            position: relative;
            animation-name: rotate;
            animation-duration: 1.1s;
            animation-iteration-count: infinite;
        }
    }
`;