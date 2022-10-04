import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.post(url).then((res) => res.data);

export function useProducts() {
  const { data, error } = useSWR(
    `https://stfe-gotogether.herokuapp.com/product/a/getList`,
    fetcher,
  );

  return {
    productList: data?.productList,
    isLoading: !error && !data,
    isError: error,
  };
}
