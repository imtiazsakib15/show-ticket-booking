import { useParams } from "react-router-dom";
import useGetShows from "../../hooks/useGetShows";
import "./ShowDetails.css";
import { useState } from "react";

const ShowDetails = () => {
  const { isPending, error, data: shows } = useGetShows();
  const { id } = useParams();
  const [showmodal, setShowmodal] = useState(false);

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

  const handleBookShow = (e) => {
    e.preventDefault();
    const bookDetails = {
      name: e.target.name.value,
      email: e.target.email.value,
      showName: show?.show?.name,
      showId: show?.show?.id,
    };
    localStorage.setItem("book_details", JSON.stringify(bookDetails));
    e.target.reset();
    setShowmodal(false);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setShowmodal(false);
  };

  return (
    <>
      <div>
        <img
          className="detailImg"
          src={show?.show?.image?.medium || show?.show?.image?.original}
          alt={show?.show?.name}
        />
        <p dangerouslySetInnerHTML={{ __html: show.show.summary }} />
        <button className="btn" onClick={() => setShowmodal(true)}>
          Book Show
        </button>

        <div className={`modal ${showmodal ? "" : "hidden"}`}>
          <form onSubmit={handleBookShow} className="modalForm">
            <div>
              <label htmlFor="showName">Show Name</label>
              <input
                type="text"
                name="showName"
                disabled
                value={show?.show?.name}
              />
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" required />
            </div>
            <div>
              <button type="submit" className="btn">
                Book Show
              </button>
              <button onClick={handleCancel} className="cancelBtn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShowDetails;
