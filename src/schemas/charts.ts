import { z } from "zod";

const chartsSchema = z.object({
  name: z
    .string({
      required_error: "La propiedad name es obligatoria",
    })
    .min(3, {message: "El nombre tiene que tener como MÍNIMO 3 caracteres"})
    .max(20, {message: "La descripción tiene que tener como MÁXIMO 20 caracteres"}),
    birthdate: z.date({
        required_error: "La propiedad birthdate es obligatoria"
    }),
    time: z.number().min(0).max(360), 
    asc: z.number().min(0).max(360), 
    sun: z.number().min(0).max(360), 
    moon: z.number().min(0).max(360), 
    mercury: z.number().min(0).max(360), 
    venu: z.number().min(0).max(360), 
    mars: z.number().min(0).max(360), 
    jupiter: z.number().min(0).max(360), 
    saturno: z.number().min(0).max(360), 
    uranus: z.number().min(0).max(360), 
    neptune: z.number().min(0).max(360), 
    pluto: z.number().min(0).max(360),
});

export function validator(data){
   return chartsSchema.safeParse(data)
}