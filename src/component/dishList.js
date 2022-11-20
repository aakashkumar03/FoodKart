import "../style/dishList.css";
import FavDish from "./favDish";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const DishList = () => {
  let location = useLocation();
  let [dish, setDish] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await (await fetch("http://localhost:5000/dish")).json();
      setDish(res);
    };
    fetchData();
  }, []);
  let handleDelete = (id) => {
    fetch(`http://localhost:5000/dish/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dish),
    });
    window.location.reload();
  };
  let handleDelete2 = (id) => {
    setDish(dish.filter((D) => D.id !== id));
  };
  return (
    <div className="dishlist">
      <div className="total">
        <h1>Total Dish:{dish.length}</h1>
      </div>
      <div className="home1">
        <div className="Dlist">
          {dish.map((D) => {
            return (
              <div className="card1">
                <div className="id">
                  Dish ID: {D.id} <br />
                </div>
                <div className="name">
                  Dish Name: {D.dishName} <br />
                </div>
                <div className="cat">
                  Catagory: {D.catagory} <br />
                </div>
                <div className="time">
                  Preparation Time: {D.time} min <br />
                </div>
                <div className="desc">
                  Description : {D.desc} <br />
                </div>
                <button onClick={() => handleDelete(D.id)}>
                      Delete
                    </button>
                {location.pathname === "/restaurant-portal/rest-list" && (
                  <div className="buttonDel">
                    <button onClick={() => handleDelete(D.id)}>
                      Delete
                    </button>
                  </div>
                )}
                {location.pathname === "/user-portal/rest-list" && (
                  <div className="buttonDel">
                    <button onClick={() => handleDelete2(D.id)}>
                      Not Intrested
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {/* <FavDish data={dish.filter((x)=>x.catagory==="veg")} Deldata={handleDelete2}/> */}
      </div>
    </div>
  );
};
export default DishList;
