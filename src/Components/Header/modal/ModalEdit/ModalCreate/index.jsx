import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TecnologiesContext } from "../../../../../providers/TechnologiesContext";
import styles from "./modalCreate.module.scss";
import InputModal from "../../../inputModal";
import { techsSchema } from "../../../TechList/techsSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const CreateTecnologies = ({ setIsVisible }) => {
  const { createTech } = useContext(TecnologiesContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(techsSchema),
  });

  const onSubmit = async (data) => {
    await createTech(data);
    setIsVisible(false);
  };

  return (
    <>
      <div role="dialog" className={styles.overlayBox}>
        <div className={styles.modalBox}>
          <div className={styles.div__header__modal}>
            <h2>Cadastrar Tecnologias</h2>
            <button onClick={() => setIsVisible(false)}>X</button>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form__create__techs}
          >
            <div className={styles.div__form}>
              <InputModal
              label="Nome"
                placeholder="Ex: Iniciante"
                type="text"
                register={register("title")}
                value="title"
              />

              <label className={styles.label__create}>Selecionar status</label>
              <select
                className={styles.select__editModal}
                name="status"
                {...register("status")}
              >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>

              <button className={styles.button__register} type="submit">Cadastrar tecnologia</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTecnologies;
