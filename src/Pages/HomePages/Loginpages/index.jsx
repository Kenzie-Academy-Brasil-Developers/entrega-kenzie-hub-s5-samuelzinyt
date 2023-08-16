import InputEyePassword from "../../../Components/Header/Inputpasword";
import Input from "../../../Components/Header/input";
import styles from "./login.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { LoginSchema } from "./formscHemaLogin";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const navigate = useNavigate();

  const submitLogin = async (loginData) => {
    try {
      await api
        .post("/sessions", loginData)

        .then((res) => {
          localStorage.setItem("@TOKEN", res.data.token);
        });

      toast.success("Logado com sucess! Redirecioando para dashboard")
      setTimeout(() => {
        navigate("/DashBoard");
      }, 3000);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      console.log(error);
    }
  };

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
          />
          <InputEyePassword
            label="Senha"
            register={register("password")}
            error={errors.password}
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
