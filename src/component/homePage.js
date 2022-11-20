import { Link } from "react-router-dom";
import "../style/homePage.css";
import pic1 from "../image/chef.jpg";
import pic2 from "../image/chef1.jpg";
import pic3 from "../image/chef2.jpg";
const HomePage = () => {
  let handleClick=(e)=>{
    e.preventDefault()
    alert("Work is on Process")
  }
  return (
    <section className="homepage">
      <div className="navbar">
        <div className="logo">
          <h1>Foodkart</h1>
        </div>
        <div className="login">
          <Link to="restaurant-login">Restaurant</Link>
          <button id="blk1"><Link id="blk" to="user-login"> User</Link></button>
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="Enter your delivery location"  />
        <button onClick={handleClick}>Search</button>
      </div>
   
      <div className="facility">
        <div className="eat">
          <img src={pic1} alt="not found" />
          <h1>Feed your employees</h1>
          <h3>Create a business account</h3>
          <div className="par"><p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A expedita
            similique, provident veniam, culpa harum neque, inventore esse quas
            exercitationem distinctio error perspiciatis? Corrupti consectetur
            in quam voluptas quod aut, illum eius voluptate animi dolorum veniam
            blanditiis facilis est maxime libero, aspernatur, sed doloribus
            odio!
          </p>
          </div>
        </div>
        <div className="delivery">
          <img src={pic2} alt="not found" />
          <h1>Your restaurant, delivered</h1>
          <h3>Add your restaurant</h3>
          <div className="par2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A expedita
            similique, provident veniam, culpa harum neque, inventore esse quas
            exercitationem distinctio error perspiciatis? Corrupti consectetur
            in quam voluptas quod aut, illum eius voluptate animi dolorum veniam
            blanditiis facilis est maxime libero, aspernatur, sed doloribus
            odio!
          </p>
          </div>
        </div>
        <div className="about">
          <img src={pic3} alt="not found" />
          <h1>Deliver with Uber Eats</h1>
          <h3>Sign up to deliver</h3>
          <div className="par3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A expedita
            similique, provident veniam, culpa harum neque, inventore esse quas
            exercitationem distinctio error perspiciatis? Corrupti consectetur
            in quam voluptas quod aut, illum eius voluptate animi dolorum veniam
            blanditiis facilis est maxime libero, aspernatur, sed doloribus
            odio!
          </p>
          </div>
        </div>
      </div>
      <div className="city">
        <div className="log">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3091/3091609.png"
            alt=""
          />
        </div>
        <div className="div1">
          {" "}
          <p> Mumbai Delhi Bangalore Hyderabad Ahmedabad Chennai Kolkata Surat </p>
        </div>
        <div className="div2">
          {" "}
         <p> Jaipur Lucknow Kanpur Nagpur Indore Thane Bhopal Visakhapatnam</p>
        </div>
        <div className="div3">
          {" "}
          <p>Pimpri-Chinchwad Patna Vadodara Ghaziabad Ludhiana Chandigarh Guwahati</p>
        </div>
        <div className="div4">
          {" "}
         <p> Solapur HubliDharwad Bareilly Moradabad Gurgaon Aligarh Jalandhar
          </p>
        </div>
        <div className="div5">
          {" "}
         <p> Tiruchirappalli Bhubaneswar Salem Bhayandar Pune Thiruvananthapuram Bhilai </p>
        </div>
        <div className="div6">
          {" "}
          <p>Bhiwandi Saharanpur Gorakhpur Guntur Amravati Bikaner Noida Jamshedpur</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
