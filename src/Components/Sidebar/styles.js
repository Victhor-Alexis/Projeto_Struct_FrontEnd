import styled from 'styled-components'

export const Container = styled.div`
    .smoothTransition {
        height: 20rem;
        background-color: #F9F6F0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 3;
        transition: 0.4s;
        max-width: 37rem;
        //min-width: 20rem;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        box-shadow: -1.7px 0px 1px 0px #999;

        .header {
            width: 100%;
            height: 5.625rem;
            background-color: #161616;
            color: #F9F6F0;
            padding: 1.4rem 5% 0 3%;
            display: flex;
            justify-content: space-between;

            p {
               font-size: 32px;
               margin-left: 2%;
            }

            .close {
                margin-top: 0.05rem;
                cursor: pointer;
                vertical-align: top;
            }
        }
        
        .deslogado {

            .boxAlert {
                width: 80%;
                height: 12vw;
                min-height: 9rem;
                min-width: 17rem;
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

            .card-completo{

                justify-content: center;
                align-items: center;

            
                .delete-button{
                    position: relative;
                    background-color: none;
                    left: 8% ;
                    top: 15% ;
                    width: 30px;
                    height: 30px;
                    

                    .icon{
                        width: 30px;
                    }

                    :hover{
                        cursor: pointer;
                    }

                }
            }

            .addfav-button{
                position: relative;
                height: 7rem;
                width: 6.5rem;
                border-radius: 30px;
                margin: 4rem;

                .add-icon{
                    width: 7rem;
                    object-fit: cover;
                    border-radius: 30px;

                    :hover{
                        cursor: pointer;
                    }

                }
            }
        }
    }

    /* * * * Media Queries * * * */

    @media screen and (max-width: 1640px) {
        .smoothTransition {
            .header {
                padding: 1.8rem 5% 0 3%;

                p {
                    font-size: 28px;
                }

                .close {
                    
                    svg {
                        width: 28px;
                        height: 28px;
                    }
                }
            }

            .deslogado {
                .boxAlert {
                    font-size: 24px;
                    padding: 9% 2% 0 2%;
                }
            }
        }
    }

    @media screen and (max-width: 1440px) {
        
        .smoothTransition .header {
            p {
                font-size: 24px;
            }

            .close {
                
                svg {
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }

    @media screen and (max-width: 1220px) {
        
        .smoothTransition .header {
            p {
                font-size: 21px;
            }

            .close {
                
                svg {
                    width: 21px;
                    height: 21px;
                }
            }
        }
    }
`;