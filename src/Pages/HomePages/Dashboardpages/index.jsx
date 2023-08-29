import { useContext, useEffect } from "react";
import styles from "./dashboard.module.scss";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { Context } from "../../../providers/context";
import TechList from "../../../Components/Header/TechList";
import { TecnologiesContext } from "../../../providers/TechnologiesContext";

const DashBoardPage = () => {
  const { userData, setUserData, UserLogout, tokenLogin } = useContext(Context);
  const { setTechs } = useContext(TecnologiesContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenLogin) {
      navigate("/");
      return;
    }

    try {
      api
        .get("/profile", {
          headers: {
            Authorization: `Bearer ${tokenLogin}`,
          },
        })
        .then((res) => {
          setUserData(res.data);
          setTechs(res.data.techs);
          navigate("/DashBoard");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, [tokenLogin, navigate, setUserData]);

  return (
    <main>
      <header className={styles.header__dashboard}>
        <div className={styles.div__header__dashboard}>
          <h1>Kenzie hub</h1>
          <button onClick={() => UserLogout()}>Sair</button>
        </div>
      </header>

      <div className={styles.div__header}>
        {userData && (
          <>
            <h2>Olá {userData.name}</h2>
            <p>{userData.course_module}</p>
          </>
        )}
      </div>

      <TechList />
    </main>
  );
};

export default DashBoardPage;
