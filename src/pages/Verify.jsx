import React from "react";
import useLivenessResult from "../hooks/api/useLivenessResult";
import Loading from "../components/Loading";

const Verify = () => {
  const refId = localStorage.getItem("refid");
  const [livenessResultData, e, livenessResultLoading] =
    useLivenessResult(refId);

  return (
    <main className="flex flex-row min-h-screen justify-center items-center bg-stone-50 ">
      <div className="w-full h-screen lg:w-[700px] lg:h-[450px] shadow-lg rounded-lg p-4 bg-white ">
        {livenessResultLoading && (
          <Loading statusText="Preparing Liveness Status" />
        )}
        {livenessResultData && (
          <div>
            <h3
              className={`text-center p-4 font-[700] ${
                livenessResultData.status === "ACCEPTED"
                  ? "bg-green-300 text-green-600"
                  : "bg-red-300 text-red-600"
              }`}
            >
              {livenessResultData.status}
            </h3>
            <img
              className="w-full"
              src={livenessResultData?.quick_liveness_image}
              alt={livenessResultData.reference_id}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Verify;
