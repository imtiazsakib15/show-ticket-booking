import { useQuery } from "@tanstack/react-query";
import "./home.css";
import axios from "axios";
import ShowCard from "../ShowCard/ShowCard";

const Home = () => {
  const {
    isPending,
    error,
    data: shows,
  } = useQuery({
    queryKey: ["shows"],
    queryFn: async () => {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      return res.data;
    },
  });

  if (isPending)
    return (
      <div className="loading">
        <h1>
          <b>Loading...</b>
        </h1>
      </div>
    );
  if (error)
    return (
      <div className="loading">
        <h1>
          <b>An error occured...</b>
        </h1>
      </div>
    );

  return (
    <div>
      <h1 className="header">All Shows</h1>
      <div className="showCards">
        {shows?.map((show) => (
          <ShowCard key={show.show.id} show={show.show} />
        ))}
      </div>
    </div>
  );
};

export default Home;
