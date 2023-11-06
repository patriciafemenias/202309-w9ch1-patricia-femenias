import { Routes, Route, Navigate } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="/films" />
      </Routes>
    </main>
  );
};

export default App;
