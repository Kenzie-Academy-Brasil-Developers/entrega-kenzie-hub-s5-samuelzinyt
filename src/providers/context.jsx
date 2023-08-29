import { createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const tokenLogin = localStorage.getItem("@TOKEN");
  const [userData, setUserData] = useState({});
  const [techs, setTechs] = useState([]);

  const navigate = useNavigate();

  const submitRegister = async (formData) => {
    try {
      await api.post("/users", formData);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Ops! algo deu errado");
      console.log(error);
    }
  };

  const submitLogin = async (loginData) => {
    try {
      await api
        .post("/sessions", loginData)

        .then((res) => {
          localStorage.setItem("@USERID", res.data.user.id);
          localStorage.setItem("@TOKEN", res.data.token);
        });

      toast.success("Logado com sucess! Redirecioando para dashboard");
      setTimeout(() => {
        navigate("/DashBoard");
      }, 3000);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      console.log(error);
    }
  };

  const UserLogout = () => {
    setUserData(null);
    navigate("/");
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@TOKEN");
    toast.warning("Deslogando...");
  };

  return (
    <Context.Provider
      value={{
        userData,
        setUserData,
        submitRegister,
        submitLogin,
        UserLogout,
        tokenLogin,
        navigate,
        techs,
        setTechs
      }}
    >
      {children}
    </Context.Provider>
  );
};
