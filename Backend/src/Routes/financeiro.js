import {  prisma } from '../lib/prisma.js';

export async function routesFinananceiro(app){
    app.get('/finan/',async ()=>{
        const finan = await prisma.financeiro.findMany({
            orderBy:{
                fin_id: 'asc'
            }
        })
        return finan;
    })

    app.post('/create_fin', async (request, reply)=>{
        const {cliente_id,usuarioId,forma_pag,debCred,dt_vencimento,cancelado,valor,pago,dt_pago} = request.body;

        const vencimento = await prisma.forma_pag.findFirst({
            where:{
                pag_id:forma_pag,
                prazo:true
            }
        })

        if(!vencimento){
            const financeiro = await prisma.financeiro.create({
                data: {
                    Cliente_id: cliente_id,
                    Doc_controle: null,
                    usuarioId: usuarioId,
                    forma_pagPag_id: forma_pag,
                    debCred: debCred,
                    dt_vencimento: new Date(),
                    cancelado: cancelado,
                    valor: valor,
                    pago:true,
                    dt_pago:new Date()
                  }
            })
        return financeiro;
        }else{
            const financeiro = await prisma.financeiro.create({
                data:{
                    Cliente_id: cliente_id,
                    Doc_controle: null,
                    usuarioId: usuarioId,
                    forma_pagPag_id: forma_pag,
                    debCred: debCred,
                    dt_vencimento: new Date(),
                    cancelado: cancelado,
                    valor: valor,
                    pago:false,
                    dt_pago
                  }                    
            })
        }
        
       
    })

    app.patch('/pagando/:id',async (request,reply)=>{
        const financeiroId = request.params.id;
        const {dt_pago,pago} = request.body;

        const updateFin = await prisma.financeiro.update({
            where:{fin_id:id},
            data:{
                dt_pago,
                pago
            }
        })
    })
}     