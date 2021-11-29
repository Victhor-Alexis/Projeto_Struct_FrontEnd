import styled from "styled-components"

export const Container = styled.div`
    ul {
        color: white;

        li:first-of-type {
            background-color: #433624;
        }

        li:first-of-type:hover {
            font-size: 21px;
        }

        li {
            cursor: pointer;
            font-size: 21px;
            padding: 2rem 1rem;
            border-bottom: 2px solid #433624;
            transition: 0.05s;
        }

        li:hover {
            font-size: 22px;
        }
    }
`;