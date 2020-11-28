import useSWR from "swr";

export const useGetUsers = ({ random }) => {
  // Fetch the first page as default
  const { data, error } = useSWR(`/api/users?since=${random}`, fetcher);
  return {
    data,
    loading: !error && !data,
    error,
  };
};

export const useGetSingleUser = ({ user }) => {
  // Fetch the first page as default
  const { data, error } = useSWR(`/api/users/${user}`, fetcher);
  return {
    data,
    loading: !error && !data,
    error,
  };
};

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};
