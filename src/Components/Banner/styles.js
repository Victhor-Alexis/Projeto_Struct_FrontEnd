import styled from 'styled-components'
import banner from '../../Assets/banner1920x1080.jpg'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    //background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
    position: absolute;
    top: 0;
    z-index: 0;
    text-align: center;

    .textBlock {
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 55%;
        transform: translate(-50%, -50%);
        
        h1 {
            font-size: 72px;
            font-weight: normal;
        }

        p {
            margin-top: 5rem;
            max-width: 55.75rem;
            font-size: 32px;
            text-align: center;
        }
    }

    /* * * * Media Queries * * * */

    @media screen and (max-width: 1550px) {
        .textBlock {
            h1 {
                font-size: 54px;
            }

            p {
                max-width: 40rem;
            }
        }
    }

    @media screen and (max-width: 1340px) {

        background-position-y: 100%;

        .textBlock {
            h1 {
                font-size: 42px;
            }

            p {
                font-size: 24px;
                margin-top: 2rem;
            }
        }
    }
 
    @media screen and (max-width: 900px) {

        .textBlock {
            margin-top: 1rem;
            width: 100%;
            padding: 0 3%;

            h1 {
                font-size: 32px;
            }

            p {
                font-size: 18px;
                margin-top: 2rem;
                text-align: center;
                display: inline-block;
                max-width: 30rem;
            }
        }
    }
`;