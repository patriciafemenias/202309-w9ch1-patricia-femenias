import MovieForm from "../../components/MovieForm/MovieForm";
import Navigation from "../../components/Navigation/Navigation";
import HomePageStyled from "../HomePage/HomePageStyled";

const NewMoviePage = (): React.ReactElement => {
  return (
    <HomePageStyled>
      <main>
        <img
          className="logo-image"
          src="/images/logo.webp"
          alt="logo"
          height="311"
          width="500"
        />
        <Navigation />
        <h2 className="main-title">Add a new Serie B horror movie!</h2>
        <MovieForm />
      </main>
    </HomePageStyled>
  );
};

export default NewMoviePage;
