import { useState, useEffect } from "react";
import '../style/nonVeg.css';
const Veg = () => {
  let [rest, setRest] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await (await fetch("http://localhost:5000/dish")).json();
      setRest(res);
    };
    fetchData();
  }, []);

  let veg = rest.filter((R) => R.catagory === "veg");

  return (
    <section className="veg">
      <div className="total">
        <h1>Total Veg Restaurant:{veg.length}</h1>
      </div>
      <div className="home">
        <div className="Rlist">
          {veg.map((R) => {
            return (
              <div className="card8">
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
                  Desription: {R.desc} <br />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Veg;
