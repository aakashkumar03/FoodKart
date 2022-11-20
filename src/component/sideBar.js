import "../style/sideBar.css";
import {Link} from 'react-router-dom';

const SideBar = (probs) => {
  let userName = probs.data
  return (
    <section className="sidebar">
      <div className="userDet">
        <div className="icon">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1239/1239719.png"
            alt=""
          />
        </div>
        <div className="name">
          <h1>User</h1>
          <p>{userName}</p>
        </div>
      </div>
      <div className="links">
        <ul>
          <li><Link to="/user-portal/user-home">Home</Link></li>
          <li><Link to="/user-portal/rest-list">Restaurant List</Link></li>
          <li><Link to="/user-portal/veg-rest">For Vegetarian</Link></li>
          <li><Link to="/user-portal/non-veg-rest">For Non Vegetarian</Link></li>
          {/* <li><Link to="/user-portal/fav-dish">Favourite Dish</Link></li> */}
          <li><Link to="/user-portal/fastdelivery">Fast Delivery</Link></li>
          <li><Link to="/user-portal/feedback">Feedback</Link></li>
          <li><Link to="/user-login">LogOut</Link></li>
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
