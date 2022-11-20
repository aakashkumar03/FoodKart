import pic1 from "../image/chef.jpg";
import pic2 from "../image/chef1.jpg";
import pic3 from "../image/chef2.jpg";
import "../style/restHome.css";
const RestHome = () => {
  return (
    <section className="resthome">
      <div className="body1">
      <div className="det">
            <h1>FoodKart</h1>
            <h3>Discover the best food and drinks in India</h3>
            <input
              type="search"
              placeholder="Search for restaurant,cuisine or a dish "
            />
          </div>
        <div className="facility1">
          <div className="eat">
            <img src={pic1} alt="not found" />
            <h1>Feed your employees</h1>
            <h3>Create a business account</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              expedita similique, provident veniam, culpa harum neque, inventore
              esse quas exercitationem distinctio error perspiciatis? Corrupti
              consectetur in quam voluptas quod aut, illum eius voluptate animi
              dolorum veniam blanditiis facilis est maxime libero, aspernatur,
              sed doloribus odio!
            </p>
          </div>
          <div className="delivery">
            <img src={pic2} alt="not found" />
            <h1>Your restaurant, delivered</h1>
            <h3>Add your restaurant</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              expedita similique, provident veniam, culpa harum neque, inventore
              esse quas exercitationem distinctio error perspiciatis? Corrupti
              consectetur in quam voluptas quod aut, illum eius voluptate animi
              dolorum veniam blanditiis facilis est maxime libero, aspernatur,
              sed doloribus odio!
            </p>
          </div>
          <div className="about">
            <img src={pic3} alt="not found" />
            <h1>Deliver with Uber Eats</h1>
            <h3>Sign up to deliver</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
              expedita similique, provident veniam, culpa harum neque, inventore
              esse quas exercitationem distinctio error perspiciatis? Corrupti
              consectetur in quam voluptas quod aut, illum eius voluptate animi
              dolorum veniam blanditiis facilis est maxime libero, aspernatur,
              sed doloribus odio!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestHome;
