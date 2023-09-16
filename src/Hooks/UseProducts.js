import axios from "axios";
import { useQuery } from "react-query";

export const useProducts = () => {
  return useQuery(
    "all-products",
    () => axios.get("https://dark-erin-badger-wear.cyclic.app/products"),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
};
