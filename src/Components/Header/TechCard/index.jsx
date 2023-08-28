import { useContext, useState } from "react";
import { TecnologiesContext } from "../../../providers/TechnologiesContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GiPencil } from "react-icons/gi";
import ModalEdit from "../modal/ModalEdit";
import styles from "./card.module.scss";

const TechCard = ({ tech }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { deleteTech, setEditTechs, ediTechs } = useContext(TecnologiesContext);

  const setId = () => {
    localStorage.setItem("@TechId", `${tech.id}`);
  };

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
                setEditTechs(tech)
              }}
            >
              <GiPencil />
            </button>

            {isVisible ? (
              <ModalEdit isVisible={isVisible} setIsVisible={setIsVisible}
            />
            ) : null}

            <button
              onClick={async () => {
                setId();
                await deleteTech(tech.id);
                // Não é necessário fazer nada aqui, o estado já foi atualizado
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
