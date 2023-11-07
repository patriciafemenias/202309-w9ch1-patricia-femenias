import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../../pages/Homepage";

const App = (): React.ReactElement => {
  return (
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="/films" element={<Homepage />} />
      </Routes>
    </main>
  );
};

export default App;
