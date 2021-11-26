import styled from "styled-components";

export const Container = styled.div`
    .wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background-color: rgba(249, 246, 240, 0.7);
        z-index: 3;
        padding: 1rem 2%;
        transition: 0.35s;

        form {
            position: relative;
            background-color: rgb(249, 246, 240);
            top: 48%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 43.75rem;
            width: 100%;
            max-height: 62rem;
            height: 90vh;
            text-align: center;
            padding-top: 0.35rem;
            min-width: 20rem;
            box-shadow: 3px 3px 4px 1px #333333;
            
            .close {
                text-align: right;
                margin: 0.9rem 1.2rem 0 0;
                cursor: pointer;
            }
            
            h1 {
                color: #6F5B3E;
                font-size: 38px;
                padding-top: 4rem;
            }  
            
            input:first-of-type {
                margin-top: 4.2rem;
            }
            
            input {
                width: 100%;
                max-width: 35rem;
                height: 5.375rem;
                border-radius: 50px;
                padding-left: 1.5rem;
                font-size: 32px;
                font-weight: bold;
                border: 3px solid #6F5B3E;
                margin: 5% 3%;
                background: none;
            }
            
            input:last-of-type {
                width: 100%;
                max-width: 21.25rem;
                padding-left: 0;
                color: white;
                background-color: #6F5B3E;
                margin-top: 2rem;
                cursor: pointer;
                border: 0;
            }

            input:last-of-type:active {
                background-color: #a58b67;
            }
            
            .box-bottom {
                width: 100%;
                height: 26vh;
                max-height: 17rem;
                background-color: #6F5B3E;
                padding: 3.4rem 0 2rem 0;
                color: rgb(249, 246, 240);
                font-size: 20px;
                position: absolute;
                bottom: 0;
                
                .button {
                    width: 100%;
                    max-width: 21.25rem;
                    margin-top: 2rem;
                    padding: 2.2rem 0;
                    font-size: 28px;
                    font-weight: bold;
                    border-radius: 50px;
                    border: none;
                    color: rgb(249, 246, 240);
                    background-color: #C4AE78;
                    cursor: pointer;
                    display: inline-block;
                }

                .button:last-of-type:active {
                    background-color: #a58b67;
                }
            }
        }

        form.cadastrar {
            h1 {
                padding-top: 0;
            }

            input:first-of-type {
                margin-top: 3.2rem;
            }

            input {
                margin: 1.5rem 3%;
            }
        }
    }

    /* * * * Media Queries * * * */

    @media screen and (max-height: 1048px) {
        .wrapper {
            form {
                h1 {
                    padding-top: 2vh;
                }  

                input:first-of-type {
                    margin-top: 5vh;
                }

                input {
                    margin: 2.5vh 3%;
                }
                
                input:last-of-type {
                    margin-top: 3.6vh;
                }

                .box-bottom {
                    padding: 3rem 0 12rem 0;
                }
            }

            form.cadastrar {
                input:first-of-type {
                    margin-top: 2.5vh;
                }

                input {
                    margin: 2vh 3%;
                }
            }
        }
    }

    @media screen and (max-height: 880px) {
        .wrapper {
            form {
                h1 {
                    font-size: 32px;
                }  

                input {
                    height: 4.375rem;
                    font-size: 24px;
                }
                
                .box-bottom {
                    padding: 4vh 0;

                    h2 {
                        font-size: 24px;
                    }

                    .button {
                        padding: 1.2rem 0;
                        font-size: 24px;
                        margin-top: 1.2rem;
                    }
                }
            }

            .close {
                svg {
                    width: 26px;
                    height: 26px;
                }
            }
        }
    }

    @media screen and (max-height: 750px) {
        .wrapper {
            form {
                h1 {
                    padding-top: 0;
                    font-size: 24px;
                }  

                input {
                    height: 3.475rem;
                    font-size: 18px;
                }
                
                .box-bottom {
                    padding: 4vh 0;

                    h2 {
                        font-size: 18px;
                    }

                    .button {
                        padding: 1rem 0;
                        font-size: 18px;
                    }      
                }
            }
        }
    }

    @media screen and (max-height: 630px) {
        .wrapper {
            form.cadastrar {
                .box-bottom {
                    height: 20vh;
                }
            }
        }
    }

    @media screen and (max-height: 550px) {
        .wrapper {
            form {
                h1 {
                    font-size: 18px;
                }  

                input {
                    font-size: 14px;
                    margin: 2vh 3%;
                }
                
                .box-bottom {
                    h2 {
                        font-size: 14px;
                    }

                    .button {
                        padding: 0.8rem 0;
                        font-size: 14px;
                    }      
                }

                .close {
                    svg {
                        width: 18px;
                        height: 18px;
                    }
                }
            }

            form.cadastrar {
                .box-bottom {
                    padding-top: 0;
                    height: 18vh;
                }
            }
        }
    }
    

    @media screen and (max-width: 1440px) {
        .wrapper {
            form {
                width: 40%;
                
                input {
                    width: 85%;
                }

                input:last-of-type {
                    width: 50%;
                }

                .box-bottom {
                    .button {
                        width: 50%;
                    }      
                }
            }
        }
    }

    @media screen and (max-width: 1048px) {
        .wrapper {
            form {

                h1 {
                    font-size: 21px;
                }

                .close {
                    svg {
                        width: 24px;
                        height: 24px;
                    }
                }
            }
        }
    }
`;