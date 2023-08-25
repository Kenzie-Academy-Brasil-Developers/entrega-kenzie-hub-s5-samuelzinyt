import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api.js";
import { Context } from "./context.jsx";

export const TecnologiesContext = createContext({});

export const TecnologiesProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);

  const createTech = async (data) => {
    try {
      api
        .post("/users/techs", data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
          },
        })
        .then((res) => setTechs([...techs, res.data]));
    } catch (error) {
      console.log(error);
    }
  };

  const filter = (array) => {
    return array.filter(({ id }) => id !== localStorage.getItem("@TechId"));
  };

  const deleteTech = () => {
    try {
      api
        .delete(`/users/techs/${localStorage.getItem("@TechId")}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
          },
        })
        // .then((res) => console.log(res))
      setTechs(filter(techs));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TecnologiesContext.Provider value={{ techs, setTechs, createTech, deleteTech }}>
      {children}
    </TecnologiesContext.Provider>
  );
};
