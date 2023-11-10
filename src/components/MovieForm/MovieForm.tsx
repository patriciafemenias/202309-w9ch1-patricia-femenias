import { useState } from "react";
import { MovieStructure } from "../../store/movies/types";
import MovieFormStyled from "./MovieFormStyled";

const MovieForm = (): React.ReactElement => {
  const emptyMovie: MovieStructure = {
    id: 0,
    title: "",
    director: "",
    year: 0,
    picture: "",
    isWatched: false,
  };

  const [newMovie, setNewMovie] = useState(emptyMovie);

  const editNewMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMovie(() => ({
      ...newMovie,
      [event.target.id]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
    console.log(newMovie);
  };

  return (
    <MovieFormStyled className="form" autoComplete="off">
      <div className="form__row">
        <label className="form__label" htmlFor="title">
          Title:
        </label>
        <input
          className="form__input"
          type="text"
          id="title"
          onChange={editNewMovie}
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="director">
          Director:
        </label>
        <input
          className="form__input"
          type="text"
          id="director"
          onChange={editNewMovie}
        />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="year">
          Realased:
        </label>
        <input className="form__input" type="number" onChange={editNewMovie} />
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="picture">
          Picture Url:
        </label>
        <input
          className="form__input"
          type="url"
          id="picture"
          onChange={editNewMovie}
        />
      </div>
      <div className="form__row--checkbox">
        <label className="form__label--checkbox" htmlFor="checkbox">
          Have you already seen it?
        </label>
        <input
          className="form__input--checkbox"
          type="checkbox"
          id="checkbox"
          onChange={editNewMovie}
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
