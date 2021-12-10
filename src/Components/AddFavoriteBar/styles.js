import styled from 'styled-components'

export const Container = styled.div`

    .smoothTransition {
        height: 20rem;
        background-color: white;
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
        
        .products{
            display: block;

            .product-bar{
                display: flex;
                color: black ;
                height: 3rem;
                border: solid;
                border-color: black;
                border-width: 2px;
                justify-content: space-between;
                padding: 1rem;
                align-items: center;

                .fav-icon{
                    width:30px;
                    height: 30px;

                    :hover{
                        cursor: pointer;
                    }
                }
            }
        }
    }
`