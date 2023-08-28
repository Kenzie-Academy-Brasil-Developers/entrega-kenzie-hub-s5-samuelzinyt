const InputModal = ({ label, type, register, placeholder, ...rest }) => {
    return (
      <>
        <div>
          <label>
            {label}
          <input type={type} {...register} placeholder={placeholder}/>
          </label>
        </div>
      </>
    );
  };
  
  export default InputModal;