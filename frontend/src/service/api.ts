import axios from "axios";
import useSWR from "swr";

const api = axios.create({
  baseURL: "http://lucas-8e4b3ef3.localhost.run",
});

export default api;

export function useSWRCustom<Data = any>(
  url: string,
  queryString: Object = {}
) {
  return useSWR<Data>(url, async (url) => {
    const response = await api.get(url, { params: queryString });
    return response.data;
  });
}
