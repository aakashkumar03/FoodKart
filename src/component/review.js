import "../style/review.css";
import { useState, useEffect } from "react";

const Review = () => {
  let [feed, setFeed] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await (
        await fetch("http://localhost:5000/feedback")
      ).json();
      setFeed(res);
    };
    fetchData();
  }, []);
  let handleDelete = (id) => {
    fetch(`http://localhost:5000/feedback/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feed),
    });
    window.location.reload();
    //we can use the above line to reloadthe page or we can remove
  };
  return (
    <section className="review1">
      <div className="total2">
        <h1>Total Review:{feed.length}</h1>
      </div>
      <div className="home2">
        <div className="review">
          {feed.map((Re) => {
            return <div className="card2">
                <div className="id">
                    ID: {Re.id} <br />
                </div>
                <div className="dname">
                    Dish Name: {Re.dishName} <br />
                </div>
                <div className="rname">
                    Restaurant Name: {Re.restName} <br />
                </div>
                <div className="custname">
                    Customer Name: {Re.custName} <br />
                </div>
                <div className="custnum">
                    Customer Number: {Re.custNum} <br />
                </div>
                <div className="rating">
                    Rating: {Re.rating} <br />
                </div>
                <div className="rev">
                    Review: {Re.review} <br />
                </div>
                <div className="buttonDel">
                    <button onClick={() => handleDelete(Re.id)}>
                      Delete
                    </button>
                  </div>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Review;
