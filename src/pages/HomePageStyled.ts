import styled from "styled-components";

const HomePageStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px;

  .main-title {
    font-family: ${({ theme }) => theme.typography.mainFont};
    color: ${({ theme }) => theme.colors.accent};
    text-shadow: 0px 1px 13px #0ccc0c;
    font-size: 60px;
    text-transform: uppercase;
    text-align: center;
  }
`;

export default HomePageStyled;
