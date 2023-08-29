import { useForm } from "react-hook-form";
import InputModalEdit from "../../inputModalEdit";
import styles from "./modalEdit.module.scss";
import { useContext } from "react";
import { TecnologiesContext } from "../../../../providers/TechnologiesContext";

const ModalEdit = ({ setIsVisible }) => {
  const { ediTechs, editModal } = useContext(TecnologiesContext);

  const { register, handleSubmit } = useForm({
    values: {
      title: ediTechs?.title,
      status: ediTechs?.status,
    },
  });

  const submit = async (formData) => {
    await editModal(formData);
    setIsVisible(false);
  };
  
  return (
    <>
      <div role="dialog" className={styles.overlayBox}>
        <div className={styles.modalBox}>
          <div className={styles.div__header}>
            <h2>Tecnologias Detalhes</h2>
            <button onClick={() => setIsVisible(false)}>X</button>
          </div>

          <form
            onSubmit={handleSubmit(submit)}
            className={styles.form__edit__techs}
          >
            <div className={styles.div__form}>
              <InputModalEdit
                label="Nome"
                placeholder="Material UI"
                disabled
                register={register("title")}
              />

              <label className={styles.label__status}>Status</label>
              <select name="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>

              <button type="submit" className={styles.button__save__edit}>Salvar alterações</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
