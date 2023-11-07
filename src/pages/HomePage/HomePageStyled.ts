import styled from "styled-components";

const HomePageStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px;

  .logo-image {
    padding-bottom: 20px;
    width: 100%;
    height: 100%;

    @media (max-width: 360px) {
      width: 220px;
    }
  }
`;

export default HomePageStyled;
