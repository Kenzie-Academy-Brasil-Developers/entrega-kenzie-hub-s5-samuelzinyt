import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/HomePages/Loginpages";
import RegisterPage from "../Pages/HomePages/Registerpages";
import DashBoardPage from "../Pages/HomePages/Dashboardpages";
import Error404 from "../Pages/HomePages/Errorpage";

const RouterMain = () => {
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/Register" element={<RegisterPage/>}/>
            <Route path="/DashBoard" element={<DashBoardPage/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    )
}

export default RouterMain;