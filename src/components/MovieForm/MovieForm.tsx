const MovieForm = (): React.ReactElement => {
  return (
    <form className="form" autoComplete="off">
      <div className="form__row">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" />
      </div>
      <div className="form__row">
        <label htmlFor="director">Director:</label>
        <input type="text" id="director" />
      </div>
      <div className="form__row">
        <label htmlFor="year">Realased:</label>
        <input type="number" />
      </div>
      <div className="form__row">
        <label htmlFor="picture">Picture Url:</label>
        <input type="url" id="picture" />
      </div>
      <div className="form__row">
        <label htmlFor="checkbox">Have you already seen it?</label>
        <input type="checkbox" id="checkbox" />
      </div>
      <div className="form__button">
        <button className="button" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default MovieForm;
