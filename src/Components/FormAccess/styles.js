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
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 43.75rem;
            width: 100%;
            max-height: 62rem;
            height: 90vh;
            text-align: center;
            padding-top: 0.35rem;
            
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
                margin: 2.5rem 3%;
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
                height: 17rem;
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
`;