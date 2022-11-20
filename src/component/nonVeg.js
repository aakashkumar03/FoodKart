import { useState, useEffect } from "react";
import '../style/nonVeg.css';
const NonVeg = () => {
  let [rest, setRest] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await (await fetch("http://localhost:5000/dish")).json();
      setRest(res);
    };
    fetchData();
  }, []);

  let nonveg = rest.filter((R) => R.catagory === "non veg");

  return (
    <section className="nonVeg">
      <div className="total">
        <h1>Total Non Veg Restaurant:{nonveg.length}</h1>
      </div>
      <div className="home">
        <div className="Rlist">
          {nonveg.map((R) => {
            return (
              <div className="card7">
                <div className="id">
                  Restaurant ID: {R.id} <br />
                </div>
                <div className="restname">
                  Restaurant Name: {R.dishName} <br />
                </div>
                <div className="number">
                  Catagory: {R.catagory} <br />
                </div>
                <div className="email">
                  Description: {R.desc} <br />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NonVeg;
