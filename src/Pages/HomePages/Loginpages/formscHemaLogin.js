import { z } from "zod";

export const LoginSchema = z
  .object({
    email: z.string().nonempty({"message": "Digite seu email de cadastro"}),
    password: z
      .string()
      .nonempty({"message": "Digite sua senha de cadastro"})
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
})