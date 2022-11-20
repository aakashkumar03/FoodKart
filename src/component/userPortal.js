import '../style/userPortal.css';
import {Routes,Route} from 'react-router-dom'
import SideBar from './sideBar';
import UserHome from './userHome';
import RestList from './restList';
import Veg from './veg';
import NonVeg from './nonVeg';
// import FavDish from './fastDel';
import MemberShip from './memberShip';
import FastDelivery from './fastDel';
import FeedBack from './feedBack.js';
import Error from './error';

const UserPortal = (probs) => {
    return ( <section className="userportal">
        <SideBar data={probs.data}/>
        <Routes>
        <Route path='/user-home' element={<UserHome/>} />
        <Route path='/rest-list' element={<RestList/>} />
        <Route path='/veg-rest' element={<Veg/>} />
        <Route path='/non-veg-rest' element={<NonVeg/>} />
        {/* <Route path='/fav-dish' element={<FavDish/>} /> */}
        <Route path='/membership' element={<MemberShip/>} />
        <Route path='/fastdelivery' element={<FastDelivery/>} />
        <Route path='/feedback' element={<FeedBack/>} />
        <Route path="/*" element={<Error/>}/>
        </Routes>
    </section> );
};
 
export default UserPortal;