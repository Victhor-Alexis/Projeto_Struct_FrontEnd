import styled from 'styled-components'

export const Container = styled.header`
    width: 25%;
    max-width: 28rem;
    background-color: #6F5B3E;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    overflow-y: scroll;

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

    img {
        margin-top: 3rem;
        width: 57%;
        height: 14vw;
    }

    .adminInfo {
        h1 {
            color: white;
            margin: 1.5rem 0;
        }
    }

    .management {
        margin-top: 3rem;
    }
`;