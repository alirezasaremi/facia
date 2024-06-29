import axios from "axios";
import React, { useEffect, useState } from "react";

const useGetUserCredentials = () => {
  const env = import.meta.env;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getUserCredentials = async () => {
    setError(null);
    setIsLoading(true);

    const body = new FormData();
    body.append("email", env.VITE_FACIA_EMAIL);
    body.append("password", env.VITE_FACIA_PASSWORD);

    await axios
      .post("/get-client-credentials", body, {
        "Content-Type": "multipart/form-data",
      })
      .then((response) => {
        setData(response.data);
        const clientID = response.data.result.data.client_id;
        const clientSecret = response.data.result.data.client_secret;

        // save user data to local storage
        localStorage.setItem("clientSecret", clientSecret);

        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUserCredentials();
  }, []);

  return [data, error, isLoading];
};

export default useGetUserCredentials;
