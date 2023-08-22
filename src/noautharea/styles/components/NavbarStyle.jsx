import styled from "styled-components";

export const NavbarStyle = styled.div`
    .top-nav{
        margin: 0 auto;
        width: 30%;
        padding-top: 1rem;
        ul{
            display: flex;
            
            li{
                list-style-type: none;
                margin-right: 5rem;
            }
        }
    }

    .logo-nav{
        padding: 0rem 5rem;
        display: flex;
        justify-content: space-between;

        img{
            width:100px;
        }
        .left{
            a{
                color: #6887e0;
                border: 1px solid #6887e0;
                padding: .5rem 1rem;
                background-color: white;
                &:hover {
                    transition: 0.5s all ease-out;

                }
            }
        }
    }
@media only screen and (max-width: 600px) {
    .logo-nav{
        padding: 1rem 0.5rem;
        img{
            height: 3.5rem;
        }
    }
}
`;
