import axios from "axios";
import { useEffect, useState } from "react";
import { NEXT_PUBLIC_API_URI } from "../utils/consts";
import { ILocalData } from "../utils/types";

export function useLocalData() {
  const [data, setData] = useState<ILocalData>();
  const [error, setError] = useState<boolean>(false);
  const getSurvey = async () => {
    try {
      const response = await axios.get(
        `${NEXT_PUBLIC_API_URI}/data/sample-data.json`
      );
      setData(response.data);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getSurvey();
  }, []);

  return { data, error };
}
