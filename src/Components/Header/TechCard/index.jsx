import { useContext, useState } from "react";
import { TecnologiesContext } from "../../../providers/TechnologiesContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GiPencil } from "react-icons/gi";
import ModalEdit from "../modal/ModalEdit";
import styles from "./card.module.scss";

const TechCard = ({ tech }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { deleteTech, setEditTechs, setCurrentTechId } =
    useContext(TecnologiesContext);

  return (
    <>
      <div className={styles.div__header}>
        <div className={styles.div__main}>
          <div className={styles.div__status}>
            <h2>{tech.title}</h2>
            <p>{tech.status}</p>
          </div>

          <div className={styles.div__buttons}>
            <button
              onClick={() => {
                setIsVisible(true);
                setEditTechs(tech);
                setCurrentTechId(tech.id); // Atualiza o estado com o ID da tecnologia
              }}
            >
              <GiPencil />
            </button>

            {isVisible ? (
              <ModalEdit isVisible={isVisible} setIsVisible={setIsVisible} />
            ) : null}

            <button
              onClick={() => {
                deleteTech(tech.id);
              }}
            >
              <RiDeleteBin5Line size={19} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechCard;
