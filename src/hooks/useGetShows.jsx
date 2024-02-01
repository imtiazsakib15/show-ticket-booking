import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetShows = () => {
  const data = useQuery({
    queryKey: ["shows"],
    queryFn: async () => {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      return res.data;
    },
  });
  return data;
};

export default useGetShows;
