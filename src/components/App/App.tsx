import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../../pages/Homepage";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="/films" element={<Homepage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
