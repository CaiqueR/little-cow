import axios from "axios";
import useSWR from "swr";

const api = axios.create({
  baseURL: "https://ubuntu-79bb94a9.localhost.run",
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
