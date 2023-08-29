import styles from "./modalEdit.module.scss"

const InputModalEdit = ({ label, type, register, placeholder, disabled, ...rest }) => {
    return (
      <>
        <div>
          <label className={styles.div__label}>
            {label}
          <input className={styles.input__edit} disabled={disabled} type={type} {...register} placeholder={placeholder}/>
          </label>
        </div>
      </>
    );
  };
  
  export default InputModalEdit;