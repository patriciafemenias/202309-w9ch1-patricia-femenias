import styled from "styled-components";

const MovieFormStyled = styled.form`
  left: auto;
  margin-top: 20px;
  background-color: #000;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 5px;
  box-shadow: 0 0 25px #70e12f;

  .form {
    &__input {
      padding: 5px;
      display: inline-block;
      width: 100%;
    }

    &__label {
      display: inline-block;
      margin-bottom: 5px;
    }

    &__row {
      display: block;
      margin: 20px;
      flex-direction: row;
      position: relative;
      align-items: center;
    }

    &__row--checkbox {
      display: flex;
      margin-bottom: 20px;

      align-items: center;
    }

    &__input--checkbox {
      width: 16px;
      height: 16px;
      accent-color: ${({ theme }) => theme.colors.light};
    }

    &__label--checkbox {
      margin: 0 20px;
    }

    &__button--box {
      display: flex;
      justify-content: center;
      margin: 20px;
    }

    &__button {
      color: #fff;
      border-radius: 15px;
      padding: 8px 16px;
      width: 300px;
      height: 40px;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 800;
      box-shadow: 0 0 25px #70e12f;
    }
  }
`;

export default MovieFormStyled;
