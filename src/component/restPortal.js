import '../style/restPortal.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './NavBar';
import AddRest from './addRest';
import AddDish from './addDish';
import RestList from './restList';
import DishList from './dishList';
import RestHome from './restHome';
import Review from './review';

const RestPortal = () => {
    return ( <section className="restportal">
        <div className="top">
            <NavBar/>
            <Routes>
                <Route path="/rest-home" element={<RestHome/>}/>
                <Route path="/add-rest" element={<AddRest/>}/>
                <Route path="/add-dish" element={<AddDish/>}/>
                <Route path="/rest-list" element={<RestList/>}/>
                <Route path="/dish-list" element={<DishList/>}/>
                <Route path="/feedback" element={<Review/>}/>
            </Routes>
        </div>
        
    </section> );
}
 
export default RestPortal;