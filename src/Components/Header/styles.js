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
    box-shadow: 0px -0.5px 3px 0px #333;

    .logo {
        h1 {
            font-family: 'Qwigley', cursive;
            font-size: 42px;
            font-weight: normal;
            color: white;
            cursor: pointer;
        }
    }

    nav.mobile-menu {
        display: none;
    }

    nav.desktop-menu {
        a, .menu {
            font-size: 18px;
            color: white;
            text-decoration: none;
            padding: 0 1.1rem;
            padding-top: 1.8rem;
            cursor: pointer;
            display: inline-block;
            //background-color: rgb(255,255,255, 0.18);
            height: 5rem;
            vertical-align: middle;
            transition: 0.4s;
        }

        a:hover{ 
            background-color: rgba(255,255,255, 0.18);
        }

        .newHover:hover {
            background-color: #EAE6DF;
        }

        .menu {
            max-width: 5.3rem;

            ul.subMenu {
                display: none;
                list-style-type: none;
                position: relative;
                width: 18rem;
                top: 1.9rem;
                left: -1.09rem;
                background-color: rgba(22, 22, 22, 0.65);
                box-shadow: 1px -1.5px 2px 0px black;

                li {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    transition: 0.4s;

                    a {
                        width: 100%;
                        margin-left: 0.5rem;
                    }

                    a:hover {
                        background: none;
                    }
                }

                li:hover {
                    background-color: rgba(255,255,255, 0.18);
                }

                .newHover:hover {
                    background-color: #EAE6DF;
                }

                img {
                    width: 32px;
                    height: 32px;
                    margin-right: 1.5rem;
                }
            }
            
        }

        .menu:hover {
            ul.subMenu {
                display: block;
            }

            background-color: rgb(255,255,255, 0.18);
        }

        .newHover:hover {
            background-color: #EAE6DF;
        }

        .line {
            margin: 0 0.6rem;
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
            margin: 0 0.8rem 0 0.3rem;
        }
    }

    .buttonFavorites {
        img {
            width: 40px;
        }
    }

    .buttonLogout {
        img {
            position: relative;
            top: -3px;
            width: 34px;
        }
    }

    .buttonAdmin {
        margin-right: 0.5rem;
        img {
            width: 35px;
        }
    }
    }


    /* * * * Media Queries * * * */

    @media screen and (max-width: 1124px) {
        nav.desktop-menu {
            display: none;
        }

        nav.mobile-menu {
            display: block;
            cursor: pointer;

            .menu-icon:hover {
                .lineMenu {
                    width: 3.25rem;
                }
            }

            .lineMenu {
                width: 3.25rem;
                border: 2px solid #fff;
                margin: 0.5rem 0;
                border-radius: 1px;
                transition: 0.4s;
            }

            .lineMenu:nth-of-type(2) {
                width: 1.25rem;
            }

            .lineMenu:nth-of-type(3) {
                width: 2rem;
            }
        }
    }

    @media screen and (max-width: 520px) {
        .logo {
            h1 {
                margin-top: 0.4rem;
                font-size: 36px;
            }
        }

        .groupRight {
            div {
                cursor: pointer;
                display: inline-block;
                margin: 0 0.32rem;
                margin-top: 0.4rem;
            }

            .buttonFavorites {
                img {
                    width: 28px;
                }
            }

            .buttonLogout {
                img {
                    position: relative;
                    top: 0.05rem;
                    width: 24px;
                }
            }
            .buttonProfile {
                img {
                    width: 24px;
                }
            }
            
            .buttonAdmin {
                img {
                    width: 24px;
                }
            }
        }
    }

    @media screen and (max-width: 350px) {
        nav.mobile-menu {
            .lineMenu {
                max-width: 2.9rem;
            }
        }
    }
`;