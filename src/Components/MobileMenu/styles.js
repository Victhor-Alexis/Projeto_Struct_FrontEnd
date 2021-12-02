import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    max-width: 25rem;
    //width: 100;
    background-color: #F9F6F0;
    transition: 0.6s;
    z-index: 3;

    .head {
        width: 100%;
        height: 5.625rem;
        background-color: #161616;
        text-align: right;
        padding-top: 1.4rem;
        
        .close {
            margin: 0 1.2rem;
            svg {
                cursor: pointer;
            }
        }
    }

    ul {    
        width: 100%;

        .menu {
            color: #444c54;
            padding: 1rem;
            background-color: rgba(239, 236, 230);
            display: flex;
            justify-content: space-between;

            @keyframes arrow { //Animação para seta durante hover na opção de menu
                0%   {top: 0;}
                50%  {top: 8px;}
                100% {top: 0;}
            }

            :hover {
                .arrow {
                    position: relative;
                    animation-name: arrow;
                    animation-duration: 1.1s;
                    animation-iteration-count: infinite;
                }
            }
        }

        ul.subMenu {
            width: 100%;

            li {
                display: flex;

                img {
                    width: 32px;
                    height: 32px;
                    margin-right: 1rem;
                    margin-top: 0.35rem;
                }

                :hover {
                    background-color: rgba(239, 236, 230);
                }

                a:hover {
                    background: none;
                }
            }
        }

        li {
            width: 100%;

            a {
                display: inline-block;
                width: 100%;
                height: 100%;
                text-decoration: none;
                color: #444c54;
                padding: 1rem;
                :hover {
                    background-color: rgba(239, 236, 230);
                }
            }
        }
    }
`;