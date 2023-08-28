import styles from "./modalEdit.module.scss"

const InputModalEdit = ({ label, type, register, placeholder, ...rest }) => {
    return (
      <>
        <div>
          <label className={styles.div__label}>
            {label}
          <input type={type} {...register} placeholder={placeholder}/>
          </label>
        </div>
      </>
    );
  };
  
  export default InputModalEdit;