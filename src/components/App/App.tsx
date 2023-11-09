import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";
import HomePage from "../../pages/HomePage/HomePage";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/create" />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
