import axios from "axios";
import { useQuery } from "react-query";

export const useProduct = (id) => {
  const link = "https://dark-erin-badger-wear.cyclic.app/products/" + id;
  const queryId = "product" + id;
  return useQuery(queryId, () => axios.get(link), {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};
