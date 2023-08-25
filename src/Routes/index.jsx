import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/HomePages/Loginpages";
import RegisterPage from "../Pages/HomePages/Registerpages";
import DashBoardPage from "../Pages/HomePages/Dashboardpages";
import Error404 from "../Pages/HomePages/Errorpage";
import { TecnologiesProvider } from "../providers/TechnologiesContext";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route>
        <Route
          path="/DashBoard"
          element={
            <TecnologiesProvider>
              <DashBoardPage />
            </TecnologiesProvider>
          }
        />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default RouterMain;
