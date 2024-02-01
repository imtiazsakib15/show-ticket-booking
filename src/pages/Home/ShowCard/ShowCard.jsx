import { Link } from "react-router-dom";
import "./ShowCard.css";

const ShowCard = ({ show }) => {
  return (
    <div className="card">
      <img
        className="cardImg"
        src={show?.image?.medium || show?.image?.original}
        // alt={show.name}
      />
      <div className="cardDetail">
        <h2>{show.name}</h2>
        <p>Status: {show.status}</p>
        <Link to={`/show/${show.id}`} className="detailLink">
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;
