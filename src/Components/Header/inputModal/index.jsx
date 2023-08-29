import styles from "./inputCreate.module.scss"

const InputModal = ({ label, type, register, placeholder, ...rest }) => {
    return (
      <>
        <div>
          <label className={styles.div__label}>
            {label}
          <input className={styles.input__edit} type={type} {...register} placeholder={placeholder}/>
          </label>
        </div>
      </>
    );
  };
  
  export default InputModal;