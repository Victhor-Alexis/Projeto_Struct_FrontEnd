import styled from "styled-components";

export const Container = styled.div`
    table {
        border: 1px solid black;
        border-collapse: collapse;
        margin: -1rem 0 3rem 1rem;
        width: 13rem;

        th, td {
            padding: 0.5rem;
            text-align: left;
            vertical-align: top;
            border: 1px solid black;
            border-collapse: inherit;
        }
    }

    .options {
        width: 70%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 0.5rem 0 1rem 0;
        border-top: 2px solid #161616;

        img {
            width: 24px;
            cursor: pointer;
        }

        @keyframes rotate {
                0%   {top: 0}
                50%  {top: -0.3rem}
                100% {top: 0}
            }

        img:hover {
            position: relative;
            animation-name: rotate;
            animation-duration: 0.95s;
            animation-iteration-count: infinite;
        }
    }

    .categorias {
        h1 {
            font-size: 24px;
            padding:  0 0 15% 0;
            text-align: center;
        }
    }
`;

export const Options = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0.5rem 0 1rem 0;
    border-top: 2px solid #161616;

    img {
        width: 24px;
        cursor: pointer;
    }

    @keyframes rotate {
        0%   {top: 0}
        50%  {top: -0.3rem}
        100% {top: 0}
    }

    img:hover {
        position: relative;
        animation-name: rotate;
        animation-duration: 0.95s;
        animation-iteration-count: infinite;
    }
`;