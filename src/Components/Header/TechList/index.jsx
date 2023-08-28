import { useContext, useState } from "react";
import CreateTecnologies from "../modal/ModalEdit/ModalCreate";
import styles from "./styles.module.scss";
import { TecnologiesContext } from "../../../providers/TechnologiesContext";
import TechCard from "../TechCard";

const TechList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { techs } = useContext(TecnologiesContext);

  return (
    <>
      <div className={styles.div__header}>
        <h2>Tecnologias</h2>
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          +
        </button>
      </div>

      {isVisible ? (
        <CreateTecnologies isVisible={isVisible} setIsVisible={setIsVisible} />
      ) : null}

      <div className={styles.div__container}>
        <div className={styles.div__card}>
          <ul>
            {techs.map((tech) => (
              <TechCard key={tech.id} id={tech.id} tech={tech}/>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TechList;
