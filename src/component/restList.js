import "../style/restList.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const RestList = () => {
  let location = useLocation();
  let [rest, setRest] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await (
        await fetch("http://localhost:5000/restaurant")
      ).json();
      setRest(res);
    };
    fetchData();
  }, []);
  let handleDelete = (id) => {
    fetch(`http://localhost:5000/restaurant/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rest),
    });
    window.location.reload();
    //we can use the above line to reloadthe page or we can remove
  };
  let handleDelete2 = (id) => {
    setRest(rest.filter((R) => R.id !== id));
  };
  return (
    <section className="restlist">
      <div className="total">
        <h1>Total Restaurant:{rest.length}</h1>
      </div>
      <div className="home">
        <div className="Rlist">
          {rest.map((R) => {
            return (
              <div className="card">
                <div className="id">
                  Restaurant ID: {R.id} <br />
                </div>
                <div className="restname">
                  Restaurant Name: {R.restName} <br />
                </div>
                <div className="number">
                  Number: {R.number} <br />
                </div>
                <div className="email">
                  Number: {R.email} <br />
                </div>
                <div className="type">
                  Type: {R.type} <br />
                </div>
                <div className="cat">
                  Catagory: {R.catagory} <br />
                </div>
                <div className="address">
                  Address: {R.address} <br />
                </div>
                {location.pathname==="/restaurant-portal/rest-list" && (
                  <div className="buttonDel">
                    <button onClick={() => handleDelete(R.id)}>
                      Delete
                    </button>
                  </div>
                )}
                {location.pathname === "/user-portal/rest-list" && (
                  <div className="buttonDel">
                    <button onClick={() => handleDelete2(R.id)}>
                      Not Intrested
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RestList;
