import React from "react";
import useGetUserCredentials from "../hooks/api/useGetUserCredentials";
import useGenerateLivenessURL from "../hooks/api/useGenerateLivenessURL";
import Loading from "../components/Loading";
import StartButton from "../components/StartButton";

const Main = () => {
  const [userCredentialsData, e1, userCredentialsLoading] =
    useGetUserCredentials();
  const [livenessURLData, e2, livenessURLLoading] = useGenerateLivenessURL(
    userCredentialsData?.result?.data?.client_secret
  );

  return (
    <main className="flex flex-row min-h-screen justify-center items-center bg-stone-50 ">
      <div className="w-full h-screen lg:w-[700px] lg:h-[450px] shadow-lg rounded-lg p-4 bg-white ">
        {userCredentialsLoading && <Loading statusText="User Credentials" />}
        {livenessURLLoading && <Loading statusText="Generating Liveness URL" />}

        {livenessURLData && <StartButton url={livenessURLData.liveness_url} />}
      </div>
    </main>
  );
};

export default Main;
