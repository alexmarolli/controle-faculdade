import { prisma } from "../lib/prisma.js";
import z, { number } from "zod";

export async function routesDocuments (app){
    
    app.post('/document', async (request)=>{
        const createDocument = z.object({
            descricao: z.string(),
            usuarioId: z.number(),
            id_cliente: z.number(),
            saida: z.boolean(),
            valor:z.number(),
            Pag_id: z.number()
        })

        const {descricao, usuarioId,id_cliente,saida,valor, Pag_id}= createDocument.parse(request.body);

        const document = await prisma.documento.create({
            data:{
                descricao,
                usuarioId,
                id_cliente,
                saida,
                valor,
                pag_id:Pag_id
            }
        })
        return document;
    })
}