import { useState } from "react";
import { axiosInstance } from "../utils";
import { toast } from "react-toastify";

function useDatabase() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (url, data) => {
    try {
      setIsPending(true);
      const res = await axiosInstance.post(url, data);
      setData(res.data);
      toast("");
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  const deletePost = async (url) => {
    try {
      setIsPending(true);
      const res = await axiosInstance.delete(url);
      setData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };

  const getData = async (url) => {
    try {
      setIsPending(true);
      const res = await axiosInstance.get(url);
      setData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { postData, deletePost, getData, isPending, error, data };
}

export default useDatabase;
