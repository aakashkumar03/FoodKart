import "../style/userLogin.css";
import {Link,useNavigate} from 'react-router-dom';
import {useState} from "react";
const UserLogin = (probs) => {
  let[user,setUser]= useState('')
  let [password,setPassword]= useState('');
  let navigate =useNavigate()
  let handleSubmit=(e)=> {
    e.preventDefault();
    if(user===probs.data && password==="user"){
      navigate('/user-portal/user-home')
    }else{
      alert("Invalid credentials")
    }
  }
  return (
    <section className="userlogin">
      <div className="back">
        <div className="form">
          <h1>User Login Page</h1>
          <div className="container">
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">User Id</label>
              <br />
              <input type="text" placeholder="Enter your UserID" value={user} onChange={(e)=>setUser(e.target.value)} />
              <br />
              <label htmlFor="">Password</label>
              <br />
              <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />   
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
