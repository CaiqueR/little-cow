import axios from "axios";
import useSWR from "swr";

const api = axios.create({
  baseURL: "http://m1.lbltavares.cloud:8080",
});

export default api;

export function useSWRCustom<Data = any>(
  url: string,
  queryString: Object = {},
) {
  return useSWR<Data>(url, async (appUrl) => {
    const response = await api.get(appUrl, { params: queryString });
    return response.data;
  });
}
