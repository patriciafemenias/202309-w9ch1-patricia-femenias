import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 16px;
    color: #fff;
    text-transform: uppercase;
    padding: 20px;
  }

  .active {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.light};
  }
`;

export default NavigationStyled;
