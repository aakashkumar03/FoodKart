import "../src/style/App.css";
import HomePage from "./component/homePage";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import UserLogin from "./component/userLogin";
import RestLogin from "./component/restLogin";
import RestPortal from "./component/restPortal";
import UserPortal from "./component/userPortal";
import Error from "./component/error";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/restaurant-login" element={<RestLogin/>}/>
        <Route path="/user-login" element={<UserLogin/>}/>
        <Route path="/restaurant-portal/*" element={<RestPortal/>}/>
        <Route path="/user-portal/*" element={<UserPortal/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
