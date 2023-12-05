import { prisma } from "./prisma.js";


export async function prazo (id){
    const prazo = await prisma.forma_pag.findMany({
        where:{
            pag_id:id,
        },
        select:{
            prazo:true
        }
    })
    return prazo;
}

export async function createFinanceiro(parceiro_id,usuarioId,pag_id,credito,dt_vencimento,valor,Pago){
    
    if(!prazo(pag_id)){
        await prisma.financeiro.create({
            data:{
                parceiro_id,
                Pag_id:pag_id,
                usuarioId,
                credito,
                valor,
                pago:Pago,
            }
        })
    }else{
        await prisma.financeiro.create({
            data:{
                parceiro_id,
                Pag_id:pag_id,
                usuarioId,
                credito,
                valor,
                dt_vencimento,
                pago:Pago,
            }
        })
    }
}