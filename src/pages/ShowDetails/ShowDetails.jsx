import { useParams } from "react-router-dom";
import useGetShows from "../../hooks/useGetShows";
import "./ShowDetails.css";

const ShowDetails = () => {
  const { isPending, error, data: shows } = useGetShows();
  const { id } = useParams();

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
  const show = shows?.find((show) => show?.show?.id == id);

  return (
    <>
      {show && (
        <div>
          <img
            className="detailImg"
            src={show?.show?.image?.medium || show?.show?.image?.original}
            alt={show?.show?.name}
          />
          <p dangerouslySetInnerHTML={{ __html: show.show.summary }} />
        </div>
      )}
    </>
  );
};

export default ShowDetails;
