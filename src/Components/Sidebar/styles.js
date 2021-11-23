import styled from 'styled-components'

export const Container = styled.div`
    .smoothTransition {
        height: 20rem;
        background-color: #F9F6F0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
        transition: 0.4s;
        max-width: 37rem;
        height: 100%;
        overflow-y: scroll;

        .header {
            width: 100%;
            height: 5.625rem;
            background-color: #161616;
            color: #F9F6F0;
            text-align: center;
            padding-top: 1.4rem;

            p {
               font-size: 32px;
               display: inline-block;
               margin-left: 2.5rem;
            }

            .close {
                display: inline-block;
                cursor: pointer;
                vertical-align: top;

                svg {
                    margin: 0.1rem 0 0 3.5rem;
                }
            }
        }
        
        .deslogado {

            .boxAlert {
                width: 80%;
                height: 12vw;
                max-height: 15.25rem;
                border: 2px dashed #161616;
                position: relative;
                left: 50%;
                top: 4rem;
                transform: translateX(-50%);
                font-size: 32px;
                text-align: center;
                padding-top: 9%;
            }
        }

        .logado {
            padding: 2rem 2%;
            width: 95%;
            text-align: center;
            flex-wrap: wrap;
            margin: 0 auto;
        }
    }
`;