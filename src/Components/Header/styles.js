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
            margin: 0 0.8rem;
        }
    }

    .buttonFavorites {
        img {
            width: 40px;
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

            .content {
                width: 100px;
                height: 100px;
                background-color: blue;
                position: absolute;
                left: 0;
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

            .buttonProfile {
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