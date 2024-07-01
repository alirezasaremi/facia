import React from "react";
import Loading from "../components/Loading";
import useLivenessStatus from "../hooks/api/useLivenessStatus";

const Verify = () => {

  const [livenessStatusData, e, livenessStatusLoading] = useLivenessStatus();

  return (
    <main className="flex flex-row min-h-screen justify-center items-center bg-stone-50 ">
      <div className="w-full h-screen lg:w-[700px] lg:h-[450px] shadow-lg rounded-lg p-4 bg-white ">
        {livenessStatusLoading && (
          <Loading statusText="Preparing Liveness Status" />
        )}

        {livenessStatusData && (
          <div>
            <h3
              className={`text-center p-4 font-[700] ${
                livenessStatusData.transactions[0].status === "ACCEPTED"
                  ? "bg-green-300 text-green-600"
                  : "bg-red-300 text-red-600"
              }`}
            >
              {livenessStatusData.transactions[0].status}
            </h3>
            <img
              className="w-full"
              src={livenessStatusData.transactions[0].image_proof}
              alt={livenessStatusData.transactions[0].reference_id}
            />
          </div>
        )}
      </div>
    </main>
  );
};


export default Verify;
