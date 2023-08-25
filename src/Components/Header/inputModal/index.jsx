import styles from "./styles.module.scss"

const InputModal = ({ label, type, register, placeholder, error, ...rest }) => {
    return (
      <>
        <div className={styles.div__input}>
          <label>
            {label}
          <input type={type} {...register} placeholder={placeholder}/>
            {error ? <span className={styles.span__message}>{error.message}</span> : null}
          </label>
        </div>
      </>
    );
  };
  
  export default InputModal;