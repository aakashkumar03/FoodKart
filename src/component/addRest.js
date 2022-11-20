import "../style/addRest.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddRest = () => {
  let [restName, SetRestName] = useState("");
  let [number, setNumber] = useState("");
  let [email, setEmail] = useState("");
  let [type, setType] = useState("");
  let [catagory, setCatagory] = useState("");
  let [address, setAddress] = useState("");
  let navi = useNavigate();
  let handeleSubmit = (e) => {
    // e.preventDefault();
    let data = { restName, number, address, email, type, catagory };
    fetch("http://localhost:5000/restaurant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Data saved Successfully");
    navi("/restaurant-portal/rest-list");
  };
  return (
    <section className="addrest">
      <div className="container2">
        <h1>Add Restaurant to Database</h1>
        <form action="" onSubmit={handeleSubmit}>
          <label htmlFor="">Restaurant Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your restaurant name"
            value={restName}
            onChange={(e) => SetRestName(e.target.value)}
          />
          <br />
          <label htmlFor="">Number</label>
          <br />
          <input
            type="number"
            placeholder="Enter your restaurant number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <label htmlFor="">Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter your restaurant mail ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="">Type of Restaurant</label>
          <br />
          <input
            type="text"
            placeholder="Enter catagory"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <br />
          <label htmlFor="">Catagories</label>
          <br />
          <input
            type="text"
            placeholder="veg/nonveg"
            value={catagory}
            onChange={(e) => setCatagory(e.target.value)}
          />
          <br />
          <label htmlFor="">Address</label>
          <br />
          <input
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />

          <button>Submit</button>
          <button>Reset</button>
        </form>
      </div>
    </section>
  );
};

export default AddRest;
