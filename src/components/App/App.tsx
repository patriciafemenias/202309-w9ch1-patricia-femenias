import { Routes, Route, Navigate } from "react-router-dom";
import AppStyled from "./AppStyled";
import HomePage from "../../pages/HomePage/Homepage";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="/films" element={<HomePage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
