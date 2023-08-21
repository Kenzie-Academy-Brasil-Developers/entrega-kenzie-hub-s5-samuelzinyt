import { useForm } from "react-hook-form";
import Input from "../../../Components/Header/input";
import styles from "./register.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./formscHemaRegister";
import { useContext } from "react";
import { Context } from "../../../providers/context";

const RegisterPage = () => {
  const { submitRegister, navigate } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  return (
    <main>
      <header>
        <div className={styles.div__header}>
          <h1>Kenzie hub</h1>
          <button onClick={() => navigate("/")}>Voltar</button>
        </div>
      </header>

      <form onSubmit={handleSubmit(submitRegister)}>
        <div className={styles.div__main}>
          <div className={styles.title__form}>
            <h2>Crie sua conta</h2>
            <p>Rapido e grátis, vamos nessa</p>
          </div>

          <Input
            label="Nome"
            type="text"
            placeholder="Digite seu nome aqui"
            register={register("name")}
            error={errors.name}
          />
          <Input
            label="Email"
            type="text"
            placeholder="Digite seu Email aqui"
            register={register("email")}
            error={errors.email}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha aqui"
            register={register("password")}
            error={errors.password}
          />
          <Input
            label="Confirmar senha"
            type="password"
            placeholder="Digite sua senha novamente"
            register={register("confirmPassword")}
            error={errors.confirmPassword}
          />
          <Input
            label="Bio"
            type="text"
            placeholder="Fale sobre você"
            register={register("bio")}
            error={errors.bio}
          />
          <Input
            label="Contato"
            type="text"
            placeholder="Opção de contato"
            register={register("contact")}
            error={errors.contact}
          />

          <div className={styles.div__select}>
            <label className={styles.label__module}>Selecionar Módulo</label>
            <select
              name="course_module"
              error={errors.course_module}
              {...register("course_module")}
            >
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro Módulo
              </option>
              <option value="Segundo Módulo (Frontend avançado)">
                Segundo Módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro Módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto Módulo
              </option>
            </select>
          </div>

          <button className={styles.button__register__form}>
            Cadastrar-se
          </button>
        </div>
      </form>
    </main>
  );
};

export default RegisterPage;
