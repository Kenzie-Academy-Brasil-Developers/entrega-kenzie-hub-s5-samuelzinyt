import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().nonempty({"message": "E obrigátorio digitar seu nome"}),
    email: z.string().nonempty({"message": "Digite um Email válido"}),
    password: z
      .string()
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
    confirmPassword: z.string(),
    bio: z.string().nonempty({"message":"E necessário ter alguma bio para concluir o cadástro"}),
    contact: z.string().nonempty({"message":"E necessário ter algum link para contato"}),
    course_module: z.string().nonempty({"message":"E necessário selecionar algum Módulo"})
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "A Senha digitada não esta iqual por favor tente novamente!",
    path: ["confirmarPassword"]
  });
