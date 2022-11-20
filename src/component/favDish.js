import '../style/favDish.css';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const FavDish = (probs) => {
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
      fetch(`http://localhost:5000/restaurant/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dish),
      });
      window.location.reload();
    };
  return (
    <section className="favdish">
      <div className="fav">
        {dish.map(
          (a) =>{return (
            <div className="cardd">
                <h1>My card</h1>
              <div className="id">
                Dish ID: {a.id} <br />
              </div>
              <div className="name">
                Dish Name: {a.dishName} <br />
              </div>
              <div className="cat">
                Catagory: {a.catagory} <br />
              </div>
              <div className="time">
                Preparation Time: {a.time} <br />
              </div>
              <div className="desc">
                Description : {a.desc} <br />
              </div>
              <div className="buttonDel">
                    <button onClick={() => handleDelete(a.id)}>Not Intrested</button>
                  </div>
            </div>
          )})
    }
      </div>
    </section>
  );
};
export default FavDish;
