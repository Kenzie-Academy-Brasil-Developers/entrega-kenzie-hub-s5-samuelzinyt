import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api.js";
import { Context } from "./context.jsx";
import { toast } from "react-toastify";

export const TecnologiesContext = createContext({});

export const TecnologiesProvider = ({ children }) => {
  const techId = localStorage.getItem("@TechId");
  const [ediTechs, setEditTechs] = useState(null);
  const [currentTechId, setCurrentTechId] = useState(null);
  const { techs, setTechs } = useContext(Context);

  const createTech = async (data) => {
    try {
      api
        .post("/users/techs", data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
          },
        })
        .then((res) => setTechs([...techs, res.data]));
        toast.success("Tecnologia criada com Sucesse!")
    } catch (error) {
      console.log(error);
      toast.error("Error a tecnologia já está criada!")
    }
  };

  const filter = (array) => {
    return array.filter(({ id }) => id !== currentTechId);
  };

  const deleteTech = (techIdToDelete) => {
    try {
      api.delete(`/users/techs/${techIdToDelete}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });
      setTechs((prevTechs) =>
        prevTechs.filter((tech) => tech.id !== techIdToDelete)
      );
      toast.success("Tecnologia deletada com sucesso!")
    } catch (error) {
      console.log(error);
      toast.error("Tecnologia já deletada!")
    }
  };

  const editModal = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.put(
        `/users/techs/${currentTechId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedTechs = techs.map((tech) =>
        tech.id === currentTechId ? { ...tech, ...data } : tech
      );
      setTechs(updatedTechs);
      toast.success("Tecnologia editada com sucesso!")
    } catch (error) {
      console.log(error);
      toast.error("Ops algo está errado!")
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
        currentTechId,
        setCurrentTechId,
      }}
    >
      {children}
    </TecnologiesContext.Provider>
  );
};
