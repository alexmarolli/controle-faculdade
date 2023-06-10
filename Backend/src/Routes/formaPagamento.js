import { request } from "http";
import { prisma } from "../lib/prisma.js";

export async function routesFormaPagamento(app){
    app.get('/forma_pag',async ()=>{
        const pagamento =await prisma.forma_pag.findMany({
            select: {
                descricao: true,
                pag_id: false,
                prazo: true,
                Financeiro: false,
                _count: false
            }
        })
        return pagamento;
    })
    app.post('/create_formaP', async (request, reply)=>{
        const {prazo, descricao} = request.body

        const formaPag = await prisma.forma_pag.create({
            data:{
                prazo,
                descricao
            }
        })
        return formaPag;
    })
}