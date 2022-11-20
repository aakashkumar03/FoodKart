import "../style/userHome.css";
import pic4 from "../image/burger2.jpg";
import pic5 from "../image/burger1.jpg";
import pic6 from "../image/burger2.jpg";
import pic7 from "../image/wallpaper12.jpg";
import pic8 from "../image/wallpaper13.jpg";
import pic9 from "../image/wallpaper14.jpg";

const UserHome = () => {
  return (
    <section className="userhome">
      <div className="full">
      <div className="top1">
        <div className="fac">
          <h1>FoodKart</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio
            necessitatibus quod eum eveniet fugit placeat deleniti numquam,
            temporibus, sequi natus, facere tenetur illum? Assumenda, debitis
            asperiores. Excepturi iste temporibus delectus porro suscipit
            impedit!
          </h4>
        </div>
        <div className="cont">
          <img src={pic7} alt="Pic7" />
          <br />
          <img src={pic8} alt="Pic8" />
          <br />
          <img src={pic9} alt="Pic9" />
        </div>
      </div>
      <div className="mid">
        <div className="pic1">
          <img src={pic4} alt="" />
          <h1>Dinning</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            necessitatibus quam quasi maxime culpa quis libero accusamus quos
            nam, quibusdam impedit ea quisquam praesentium corporis!
          </p>
        </div>
        <div className="pic2">
          <img src={pic5} alt="" />
          <h1>Dinning 1</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            corrupti dolorem quisquam nesciunt sunt numquam voluptates.
            Asperiores sunt officiis vel quam reiciendis at ea unde, repudiandae
            aliquam aliquid error ratione.
          </p>
        </div>
        <div className="pic3">
          <img src={pic6} alt="" />
          <h1>Dinning 2</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            corrupti dolorem quisquam nesciunt sunt numquam voluptates.
            Asperiores sunt officiis vel quam reiciendis at ea unde, repudiandae
            aliquam aliquid error ratione.
          </p>
        </div>
      </div>
      <div className="footer">
        <img src={pic4} alt="" />
      </div>
      </div>
    </section>
  );
};

export default UserHome;
