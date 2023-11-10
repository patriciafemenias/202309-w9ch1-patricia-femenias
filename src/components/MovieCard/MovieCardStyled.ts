import styled from "styled-components";

const MovieCardStyled = styled.article`
  text-align: center;
  margin: 20px;
  margin-top: 20px
  width: 330px;
  background-color: #000;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 40px;
  color: ${({ theme }) => theme.colors.main};
  box-shadow: 0 0 25px #70e12f;


  .movie-card {
    &__data {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
    }

    &__title {
      color: ${({ theme }) => theme.colors.light};
      text-transform: uppercase;
      margin: 20px;
    }

    &__info-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      align-items: center;
      justify-items: start;
    }

    &__title-info {
      font-weight: bold;
    }

    &__image {
      border-radius: 15px;
      width: 100%;
      height: 100%;
    }

    &__checkbox {
      display: flex;
      margin: 20px;
      accent-color: ${({ theme }) => theme.colors.light};
    }

    &__feedback {
      color: #70e12f;
      height: 40px;
    }

    @media (max-width: 360px) {
      width: 220px;
    }
  }
`;

export default MovieCardStyled;
