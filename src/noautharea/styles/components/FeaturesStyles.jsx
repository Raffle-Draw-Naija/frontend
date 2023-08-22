import styled from "styled-components";

export const FeaturesStyles = styled.div`
    header{
        margin: 5rem 0rem;
        text-align: center;
        h1{
            color: #2e3280;
        }
    }
    .card{
        border: 0px !important;
        box-shadow: -2px 3px 14px 1px rgba(162,168,214,0.75);
        -webkit-box-shadow: -2px 3px 14px 1px rgba(162,168,214,0.75);
        -moz-box-shadow: -2px 3px 14px 1px rgba(162,168,214,0.75);
    }
    .content{
        text-align: center;
        img{
            width: 150px;
            height: 150px;
        }
        .img{
            display: flex;
            justify-content: center;
        }
    }

    .content-how-it-works .card-body{
        display: flex;
    }
`;
