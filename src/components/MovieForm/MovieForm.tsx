import MovieFormStyled from "./MovieFormStyled";

const MovieForm = (): React.ReactElement => {
  return (
    <MovieFormStyled className="form" autoComplete="off">
      <div className="form__row">
        <label className="form__label" htmlFor="title">
          Title:
        </label>
        <input className="form__input" type="text" id="title" />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="director">
          Director:
        </label>
        <input className="form__input" type="text" id="director" />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="year">
          Realased:
        </label>
        <input className="form__input" type="number" />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="picture">
          Picture Url:
        </label>
        <input className="form__input" type="url" id="picture" />
      </div>
      <div className="form__row--checkbox">
        <label className="form__label--checkbox" htmlFor="checkbox">
          Have you already seen it?
        </label>
        <input
          className="form__input--checkbox"
          type="checkbox"
          id="checkbox"
        />
      </div>
      <div className="form__button--box">
        <button className="form__button" type="submit">
          Create
        </button>
      </div>
    </MovieFormStyled>
  );
};

export default MovieForm;
