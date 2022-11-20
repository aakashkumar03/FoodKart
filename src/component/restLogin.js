import "../style/restLogin.css";
import { Link } from "react-router-dom";
const RestLogin = () => {
  return (
    <section className="restlogin">
      <div className="back1">
        <div className="form1">
          <h1>Restaurant Login Page</h1>
          <div className="container1">
            <form action="">
              <label htmlFor="">Restaurant ID</label>
              <br />
              <input type="text" placeholder="Enter your Restaurant ID"/>
              <br />
              <label htmlFor="">Password</label>
              <br />
              <input type="password" placeholder="Enter your password"/>
              <br />
              <button><Link to="/restaurant-portal">Login</Link></button>
              <button><Link to="/"> Home Page</Link></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestLogin;
