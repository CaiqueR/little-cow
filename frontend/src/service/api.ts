import axios from "axios";
import useSWR from "swr";

const api = axios.create({
  baseURL: "https://randomuser.me/api",
});

export default api;

export function useSWRCustom<Data = any>(url: string) {
  return useSWR<Data>(url, async (url) => {
    const response = await api.get(url);
    return response.data;
  });
}
