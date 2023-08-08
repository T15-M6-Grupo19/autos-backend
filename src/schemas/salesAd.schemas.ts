import { z } from "zod"
import { Combustivel } from "../entities/anuncios.entity"

const salesAdSchema = z.object({
    id: z.string(),
    marca: z.string(),
    modelo: z.string(),
    ano: z.date(),
    combustivel: z.nativeEnum(Combustivel),
    quilometragem: z.number(),
    cor: z.string(),
    bom_negocio: z.boolean().default(false),
    preco: z.number(),
    descricao: z.string(),
    publicado: z.boolean().default(false),
})

const salesAdRequestSchema = salesAdSchema.omit({
    id:true,
    bom_negocio:true,
    publicado:true,
})



export { salesAdSchema, salesAdRequestSchema }