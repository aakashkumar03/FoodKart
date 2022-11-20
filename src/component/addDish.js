import "../style/addDish.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddDish = () => {
  let [dishName, setDishName] = useState("");
  let [catagory, sarCatagory] = useState("");
  let [time, setTime] = useState("");
  let [desc, setDesc] = useState("");
  let navi = useNavigate();
  let handeleSubmit = (e) => {
    // e.preventDefault();
    let data = { dishName, catagory, time, desc };
    fetch("http://localhost:5000/dish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Data saved Successfully");
    navi("/restaurant-portal/dish-list");
  };
  return (
    <section className="adddish">
      <div className="container3">
        <h1>Add Dish to Database</h1>
        <form action="" onSubmit={handeleSubmit}>
          <label htmlFor="">Dish Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your dish name"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
          />
          <br />
          <label htmlFor="">Catagory</label>
          <br />
          <input
            type="text"
            placeholder="veg/Nonveg"
            value={catagory}
            onChange={(e) => sarCatagory(e.target.value)}
          />
          <br />
          <label htmlFor="">Time to prepare</label>
          <br />
          <input
            type="number"
            name=""
            id=""
            placeholder="Enter preparation time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <br />
          <label htmlFor="">Description</label>
          <br />
          <textarea
            name=""
            id="desc"
            cols="30"
            rows="10"
            placeholder="Description of dish"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <br />
          <button>Submit</button>
          <button>Reset</button>
        </form>
      </div>
    </section>
  );
};

export default AddDish;
