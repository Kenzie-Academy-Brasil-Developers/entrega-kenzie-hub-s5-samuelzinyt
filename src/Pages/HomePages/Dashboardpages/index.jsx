import { useContext, useEffect, useState } from "react";
import styles from "./dashboard.module.scss";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { Context } from "../../../providers/context";

const DashBoardPage = () => {
  const { userData, setUserData, UserLogout, tokenLogin } = useContext(Context);

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
        <h2>Olá {userData.name}</h2>
        <p>{userData.course_module}</p>
      </div>

      <div className={styles.div__content}>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </main>
  );
};

export default DashBoardPage;
