import "../style/restLogin.css";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
const RestLogin = (probs) => {
  let[email,setEmail]= useState('')
  let [password,setPassword]= useState('');
  let navigate =useNavigate()
  let handleSubmit=(e)=> {
    e.preventDefault();
    if(email===probs.data && password==="admin"){
      navigate('/restaurant-portal/')
    }else{
      alert("Invalid credentials")
    }
  }
  return (
    <section className="restlogin">
      <div className="back1">
        <div className="form1">
          <h1>Restaurant Login Page</h1>
          <div className="container1">
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">Restaurant ID</label>
              <br />
              <input type="text" placeholder="Enter your Restaurant ID" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <br />
              <label htmlFor="">Password</label>
              <br />
              <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
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
