import { z } from "zod"

export const techsSchema = z
.object({
    title: z.string().nonempty({"message": "Digite o nome da sua tecnologia"}),
    status: z
    .string()
    .nonempty({"message": "Digite o seu nivel da status Ex: iniciante"})
})