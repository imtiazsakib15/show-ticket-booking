import "./home.css";
import ShowCard from "../ShowCard/ShowCard";
import useGetShows from "../../../hooks/useGetShows";

const Home = () => {
  const { isPending, error, data: shows } = useGetShows();

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
