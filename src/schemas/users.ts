import { z } from "zod";

const usersSchema = z.object({
  name: z
    .string({
      required_error: "La propiedad name es obligatoria",
    })
    .min(3, {message: "El nombre tiene que tener como MÍNIMO 3 caracteres"})
    .max(20, {message: "La descripción tiene que tener como MÁXIMO 20 caracteres"}),
    email: z.string({
        required_error: "La propiedad name es obligatoria"
    })
    .email(),
});

export function validator(data){
   return usersSchema.safeParse(data)
}