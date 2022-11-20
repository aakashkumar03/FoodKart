import "../style/userLogin.css";
import {Link} from 'react-router-dom';
const UserLogin = () => {
  return (
    <section className="userlogin">
      <div className="back">
        <div className="form">
          <h1>User Login Page</h1>
          <div className="container">
            <form action="">
              <label htmlFor="">User Id</label>
              <br />
              <input type="text" placeholder="Enter your UserID" />
              <br />
              <label htmlFor="">Password</label>
              <br />
              <input type="password" placeholder="Enter your password"/><br />   
              <button><Link to="/user-portal">Login</Link></button>
              <button><Link to="/">Home Page</Link></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserLogin;
