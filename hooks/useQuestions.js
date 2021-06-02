import React, { useEffect, useState } from "react";
import API from "../services/API";

const useQuestions = (amount = 10, difficulty = "hard", type = "boolean") => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuestions(amount, difficulty, type);
  }, [])

  const fetchQuestions = async (amount, difficulty, type) => {
    try {
      setLoading(true);
      const response = await API.getQuestions(amount, difficulty, type);
      setData(response.data.results);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
      throw new Error(`Error: ${e}`);
    }
  }

  return { loading, error, data }

}

export default useQuestions;