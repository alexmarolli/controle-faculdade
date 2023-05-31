//import { PrismaClient } from "@prisma/client"
import {prisma} from '../lib/prisma.js'

//const prisma=new PrismaClient();

export async function routesUsuario(app){
    app.get('/teste/',async ()=>{
        const user = await prisma.usuario.findMany({
            orderBy:{
               nome:'desc'
            }
        })
        return user;
    })

    app.post('/ainda_NS', async ()=>{

    })
}