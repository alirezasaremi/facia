import axios from "axios";
import React, { useEffect, useState } from "react";

const useGenerateLivenessURL = (clientSecret) => {
  const env = import.meta.env;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateLivenessURL = async () => {
    setError(null);
    setIsLoading(true);

    const body = new URLSearchParams();
    body.append("redirect_url", env.VITE_FACIA_REDIRECT_URL);
    body.append("callback_url", env.VITE_FACIA_CALLBACK_URL);
    body.append("customer_id", 10);
    body.append("customer_email", "test@example.com");
    body.append("ttl", 60);

    await axios
      .post("/generate-liveness-url", body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "client-secret": clientSecret,
        },
      })
      .then((response) => {
        setData(response.data.result.data);
        console.log(response.data.result.data);
        localStorage.setItem("refid", response.data.result.data.reference_id);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (clientSecret) {
      generateLivenessURL();
    }
  }, [clientSecret]);

  return [data, error, isLoading];
};

export default useGenerateLivenessURL;
