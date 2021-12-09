import styled from 'styled-components'

export const Container = styled.header`
    width: 25%;
    max-width: 28rem;
    background-color: #6F5B3E;
    position: fixed;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    z-index: 2;

    /* Editando scrollBar */

    ::-webkit-scrollbar {
        width: 0.6rem;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    /* * * * */

    .close {
        display: none;
    }

    img {
        margin-top: 3rem;
        width: 57%;
        height: 14vw;
        min-width: 8rem;
        min-height: 9rem;
        max-width: 13rem;
        max-height: 13rem;
    }

    .adminInfo {
        h1 {
            color: white;
            margin: 1.5rem 0;
        }
    }

    .manage {
        margin-top: 2rem;

        li {
            background-color: #433624;
            padding: 1.5rem 0;
            margin: 0.2rem 0;
            color: white;
            font-size: 21px;
            cursor: pointer;
            transition: 0.2s;
        }

        li:hover {
            font-size: 20px;
        }
    }

    /* Media queries */

    @media screen and (max-width: 1200px) {
        min-width: 16rem;

        .adminInfo {
            h1 {
                font-size: 21px;
            }
        }

        .manage {
            li {
                font-size: 18px;
            }
        }
    }

    @media screen and (max-width: 535px) {
        .close {
            display: block;
            text-align: right;
            padding-top: 1rem;
            padding-right: 1rem;

            svg {
                cursor: pointer;
            }
        }
    }
`;