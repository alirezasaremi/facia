import axios from "axios";
import React, { useEffect, useState } from "react";

const useLivenessResult = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getLivenessResult = async () => {
    setError(null);
    setIsLoading(true);

    const body = new URLSearchParams();
    body.append("reference_id", localStorage.getItem("refid"));

    await axios
      .post(`/status`, body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
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

export default useLivenessResult;
