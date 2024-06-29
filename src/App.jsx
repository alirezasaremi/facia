import { useState } from "react";
import useGenerateLivenessURL from "./hooks/api/useGenerateLivenessURL";
import useGetUserCredentials from "./hooks/api/useGetUserCredentials";
import useLivenessResult from "./hooks/api/useLivenessResult";
import Loading from "./components/Loading";
import { Link, Route, Routes } from "react-router-dom";
import StartButton from "./components/StartButton";
import Main from "./pages/Main";
import Verify from "./pages/Verify";

function App() {
  const [refId, setRefId] = useState("");
  const [livenessResultData, e3, livenessResultLoading] = useLivenessResult(refId);

  return(
    <Routes>
      <Route path="/" element={<Main />} index={true} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
  )

  return (
    <main>
      {livenessURLData && (
        <div>
          <h3>callback_url: {livenessURLData.callback_url}</h3>
          <h3>customer_email: {livenessURLData.customer_email}</h3>
          <h3>customer_id: {livenessURLData.customer_id}</h3>
          <h3>
            liveness_url:{" "}
            <a target="_blank" href={livenessURLData.liveness_url}>
              Check Liveness
            </a>
          </h3>
          <h3>redirect_url: {livenessURLData.redirect_url}</h3>
          <h3>reference_id: {livenessURLData.reference_id}</h3>

          <button
            style={{ marginTop: "24px", marginBottom: "24px" }}
            onClick={() => {
              setRefId(livenessURLData.reference_id);
            }}
          >
            Check Result
          </button>
          {livenessResultData && (
            <div>
              <hr />
              <h3>status: {livenessResultData.status}</h3>
              <img
                src={livenessResultData?.quick_liveness_image}
                alt={livenessResultData.reference_id}
              />
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
