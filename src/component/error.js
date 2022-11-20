import { Link } from "react-router-dom";
import '../style/error.css';
const Error = () => {
    return ( <section className="error">
        <div className="rtrnHome">
        <div className="msg">
        <h1>Click here to return to Site Home Page</h1>
        </div>
        <div className="but">
        <button><Link to="/">Home Page</Link></button>
        </div>
        </div>
    </section> );
}
 
export default Error;