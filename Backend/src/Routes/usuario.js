import { Prisma, prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";

export async function routesUsuario(app){
    app.get('teste/',async ()=>{
        const user = await prisma.usuario.findMany({
            
        })
    })
}