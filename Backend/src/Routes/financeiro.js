import { Prisma, prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";

export async function financeiroRoute(app){
    app.get('finan/',async ()=>{
        const finan = await prisma.financeiro.findMany({
            orderBy:{
                fin_id: 'asc'
            }
        })
    })
}