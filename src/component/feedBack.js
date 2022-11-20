import "../style/feedBack.css";
import { useState } from "react";
const FeedBack = () => {
  let [dishName, setDishName] = useState("");
  let [restName, setRestName] = useState("");
  let [custName, setCustName] = useState("");
  let [custNum, setCustNum] = useState("");
  let [rating, setRating] = useState("");
  let [review, setReview] = useState("");
  let handeleSubmit = (e) => {
    // e.preventDefault();
    let data = { dishName, restName, custName, custNum, rating, review };
    fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Data saved Successfully");
  };
  return (
    <section className="feedback">
      <div className="container4">
        <div className="form2">
          <h1>Feedback for restaurant</h1>
          <form action="" onSubmit={handeleSubmit}>
            <label htmlFor="">Dish name</label>
            <br />
            <input
              type="text"
              placeholder="Enter dish name"
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
            />{" "}
            <br />
            <label htmlFor="">Restaurant Name</label>
            <br />
            <input type="text" placeholder="Enter restaurant name" value={restName} onChange={(e)=>setRestName(e.target.value)} />
            {/* <select name="restname" id="restN">
              <option value="">Enter your restaurant</option>
              <option value="">A</option>
              <option value="">B</option>
            </select> */}
            
            <br />
            <label htmlFor="">Your name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              value={custName}
              onChange={(e) => setCustName(e.target.value)}
            />
            <br />
            <label htmlFor="">Your number</label>
            <br />
            <input
              type="number"
              placeholder="Enter your number"
              value={custNum}
              onChange={(e) => setCustNum(e.target.value)}
            />
            <br />
            <label htmlFor="">Rating</label>
            <br />
            <input
              type="number"
              placeholder="Enter rating for dish"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            {/* <div className="check">
                <input type="checkbox" />
                <label htmlFor="">1</label>
                <input type="checkbox" />
                <label htmlFor="">2</label>
                <input type="checkbox" />
                <label htmlFor="">3</label>
                <input type="checkbox" />
                <label htmlFor="">4</label>
                <input type="checkbox" />
                <label htmlFor="">5</label>
                </div> */}
            <br />
            <label htmlFor="">Review</label>
            <br />
            <textarea
              name="review"
              id="rview"
              cols="30"
              rows="10"
              placeholder="Enter your reviews"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
