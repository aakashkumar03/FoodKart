import { useState, useEffect } from "react";
import '../style/nonVeg.css';
const FavDish = () => {
  let [rest, setRest] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await (await fetch("http://localhost:5000/dish")).json();
      setRest(res);
    };
    fetchData();
  }, []);

  let fav = rest.filter((R) => R.dishName === "biriyani");

  return (
    <section className="fav">
      <div className="total">
        <h1>Total Fav Restaurant:{fav.length}</h1>
      </div>
      <div className="home">
        <div className="Rlist">
          {fav.map((R) => {
            return (
              <div className="card">
                <div className="id">
                  Restaurant ID: {R.id} <br />
                </div>
                <div className="restname">
                  Restaurant Name: {R.dishName} <br />
                </div>
                <div className="number">
                  Number: {R.catagory} <br />
                </div>
                <div className="email">
                  Number: {R.desc} <br />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FavDish;
