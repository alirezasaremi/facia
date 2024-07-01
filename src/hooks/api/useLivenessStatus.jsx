import axios from "axios";
import React, { useEffect, useState } from "react";

const useLivenessStatus = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getLivenessResult = async () => {
    setError(null);
    setIsLoading(true);

    await axios
      .get(`/liveness-url-status/${localStorage.getItem("refid")}`, {
        headers: {
          "client-secret": localStorage.getItem("clientSecret"),
        },
      })
      .then((response) => {
        setData(response.data.result.data);
        console.log(response.data.result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getLivenessResult();
  }, []);

  return [data, error, isLoading];
};

export default useLivenessStatus;
