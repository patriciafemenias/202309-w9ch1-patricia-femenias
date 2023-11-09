import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";
import HomePage from "../../pages/HomePage/HomePage";
import NewMovieForm from "../../pages/NewMovieForm/NewMovieForm";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/create" />} />
        <Route path="/create" element={<NewMovieForm />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
