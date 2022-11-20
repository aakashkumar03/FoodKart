import { useState, useEffect } from "react";
import '../style/nonVeg.css';
const FastDelivery = () => {
  let [rest, setRest] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await (await fetch("http://localhost:5000/dish")).json();
      setRest(res);
    };
    fetchData();
  }, []);

  let fast = rest.filter((R) => R.time <30 );

  return (
    <section className="fast">
      <div className="total">
        <h1>Quick Restaurant:{fast.length}</h1>
      </div>
      <div className="home">
        <div className="Rlist">
          {fast.map((R) => {
            return (
              <div className="card9">
                <div className="id">
                  Restaurant ID: {R.id} <br />
                </div>
                <div className="restname">
                  Restaurant Name: {R.dishName} <br />
                </div>
                <div className="number">
                  Number: {R.catagory} <br />
                </div>
                <div className="number">
                  Time: {R.time} min <br />
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

export default FastDelivery;
