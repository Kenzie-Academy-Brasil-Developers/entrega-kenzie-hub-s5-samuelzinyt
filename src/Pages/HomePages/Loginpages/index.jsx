import InputEyePassword from "../../../Components/Header/Inputpasword";
import Input from "../../../Components/Header/input";
import styles from "./login.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { LoginSchema } from "./formscHemaLogin";
import { useContext } from "react";
import { Context } from "../../../providers/context";

const LoginPage = () => {
  const { submitLogin } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  return (
    <main>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title__login}>Kenzie hub</h1>
        </div>
      </header>
      <form onSubmit={handleSubmit(submitLogin)} className={styles.form__login}>
        <div className={styles.div__form}>
          <div className={styles.title__form}>
            <h2>Login</h2>
          </div>

          <Input
            label="Email"
            type="text"
            register={register("email")}
            error={errors.email}
            placeholder="Digite seu email de login"
          />
          <InputEyePassword
            label="Senha"
            register={register("password")}
            error={errors.password}
            placeholder="Digite sua senha de login"
          />

          <button className={styles.button__acess}>Entrar</button>

          <h2 className={styles.h2__acess}>Ainda não possui conta?</h2>

          <button className={styles.button__register}>
            <Link to="/Register">Cadastre-se</Link>
          </button>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
