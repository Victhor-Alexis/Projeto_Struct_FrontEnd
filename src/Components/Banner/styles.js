import styled from 'styled-components'
import banner from '../../Assets/banner1920x1080.jpg'

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
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
`;