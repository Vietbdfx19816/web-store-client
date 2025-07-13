import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://web-store-server-c0dc.onrender.com/api/',
  withCredentials: true,
});

const useGetData = initUrl => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (url, params = {}) => {
    setError(null);
    setLoading(true);

    try {
      const res = await instance.get(url, { params });
      setData(res.data);
    } catch (err) {
      setError(err.response);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!initUrl) return;

    fetchData(initUrl);
  }, [initUrl, fetchData]);

  return { data, loading, error, fetchData };
};

export default useGetData;
