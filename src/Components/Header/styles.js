import styled from 'styled-components'

export const Container = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Qwigley&display=swap');
  
    background-color: rgba(22, 22, 22, 0.65);
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8%;
    position: relative;
    z-index: 1;

    .logo {
        h1 {
            font-family: 'Qwigley', cursive;
            font-size: 42px;
            font-weight: normal;
            color: white;
        }
    }

    nav {
        a {
            font-size: 18px;
            color: white;
            text-decoration: none;
            margin: 0 1.7rem;
        }

        .line {
            display: inline-block;
            width: 0.5rem;
            border: 1px solid #fff;
            vertical-align: middle;
        }
    }

    .groupRight {
        div {
            cursor: pointer;
            display: inline-block;
            margin: 0 0.8rem;
        }
    }

    .buttonFavorites {
        img {
            width: 40px;
        }
    }
`;