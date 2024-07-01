import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Verify from "./pages/Verify";

function App() {
  const [refId, setRefId] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Main />} index={true} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
  );
}

export default App;
