import { useContext, useState } from "react";
import { TecnologiesContext } from "../../../providers/TechnologiesContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GiPencil } from "react-icons/gi";
import ModalEdit from "../modal/ModalEdit";
import styles from "./card.module.scss";

const TechCard = ({ status, title, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { deleteTech } = useContext(TecnologiesContext);

  const setId = () => {
    localStorage.setItem("@TechId", `${id}`);
  };

  return (
    <>
      <div className={styles.div__header}>
        <div className={styles.div__main}>
          <div className={styles.div__status}>
            <h2>{title}</h2>
            <p>{status}</p>
          </div>

          <div className={styles.div__buttons}>
            <button
              onClick={() => {
                setIsVisible(true);
              }}
            >
              <GiPencil />
            </button>

            {isVisible ? (
              <ModalEdit isVisible={isVisible} setIsVisible={setIsVisible} />
            ) : null}

            <button
              onClick={() => {
                setId();
                deleteTech(id);
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
