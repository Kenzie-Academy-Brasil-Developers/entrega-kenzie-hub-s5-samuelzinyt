import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import styles from "./passwordinput.module.scss";

const InputEyePassword = ({ label, register, placeholder, error }) => {
  const [ IsHidden, setIsHidden ] = useState(true);

  return (
    <>
      <div className={styles.div__input}>
        <label>{label}
        <input
          type={IsHidden ? "password" : "text"}
          {...register}
          placeholder={placeholder}
          />
        </label>
          {error ? <span className={styles.span__message}>{error.message}</span> : null}
      </div>

      
        <button className={styles.button__visible} type="button" onClick={() => setIsHidden(!IsHidden)}>
          {IsHidden ? <MdVisibility/> : <MdVisibilityOff />}
        </button>
     
    </>
  );
};

export default InputEyePassword;
