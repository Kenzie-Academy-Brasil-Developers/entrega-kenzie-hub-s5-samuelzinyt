import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api.js";
import { Context } from "./context.jsx";

export const TecnologiesContext = createContext({});

export const TecnologiesProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);
  const [ediTechs, setEditTechs] = useState(null);
  const techId = localStorage.getItem("@TechId");
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
    return array.filter(({ id }) => id !== techId);
  };

  const deleteTech = () => {
    try {
      api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });
      setTechs((prevTechs) => prevTechs.filter((tech) => tech.id !== techId));
    } catch (error) {
      console.log(error);
    }
  };

  const editModal = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.put(`/users/techs/${techId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechnologies = techs.map((tech) => {
        if (tech.id === techId) {
          return formData;
        } else {
          return tech;
        }
      });
      setTechs(newTechnologies);
      setEditTechs(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TecnologiesContext.Provider
      value={{
        techs,
        setTechs,
        createTech,
        deleteTech,
        ediTechs,
        setEditTechs,
        editModal,
      }}
    >
      {children}
    </TecnologiesContext.Provider>
  );
};
