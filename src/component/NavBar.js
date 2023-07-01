import { Link } from "react-router-dom";
import "../style/navBar.css";
const NavBar = (probs) => {
  let adName = probs.data;
  return (
    <section className="navb">
      <div className="adminDet">
        <div className="icon">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6024/6024190.png"
            alt=""
          />
        </div>
        <div className="name">
        <h1>Restaurant Admin</h1>
        <p>{adName}</p>
        </div>
      </div>
      <div className="link">
        <ul>
          <li>
            <Link to="/restaurant-portal/">Home</Link>
          </li>
          <li>
            <Link to="/restaurant-portal/add-rest">Add Restaurant</Link>
          </li>
          <li>
            <Link to="/restaurant-portal/add-dish">Add Dish</Link>
          </li>
          <li>
            <Link to="/restaurant-portal/rest-list">Restaurant List</Link>
          </li>
          <li>
            <Link to="/restaurant-portal/dish-list">Dish List</Link>
          </li>
          <li>
            <Link to="/restaurant-portal/feedback">Feedbacks</Link>
          </li>
          <li>
            <Link to="/restaurant-login"> LogOut</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
