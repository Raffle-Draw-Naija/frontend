import styled from "styled-components";

export const FooterStyle = styled.section`
.footer{
  color: white;
  background: rgb(116,106,235);
  background: linear-gradient(90deg, rgba(116,106,235,1) 0%, rgba(116,106,235,1) 35%, rgba(156,121,242,1) 100%);
  display: flex;
  justify-content: center;
  padding: 10rem;
  h2{
    color: white;
  }
  .d-flex{
    margin-top: 2rem;
    a{
      color: white;
    }
  }
  .register{
    display: flex;
    justify-content: center;
    a{
      color: white;
      background-color: #fff;
      color: blue;
      padding: .8rem 2rem;
      margin-left: 1rem;
    }
  }

}
`;
