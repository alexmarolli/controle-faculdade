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
        const {financeiroId} = request.params.id;
        const {dt_pago,pago} = request.body;

        const existe = await prisma.financeiro.findFirst({
            where:{
                fin_id:financeiroId
            }
        })

        return ("Financeiro não existe!")

        const Pago =  await prisma.financeiro.findMany({
            where:{
                fin_id:financeiroId
            },
            select:{
                pago:true
            }
        })
        if(pago ){
            return ("Financeiro ja pago")
        }
        
        const updateFin = await prisma.financeiro.updateMany({
            where:{id:financeiroId},
            data:{
                dt_pago: dt_pago,
                pago:pago
            }
        })

        return prisma.financeiro.findFirst({
            where:{
                fin_id:financeiroId
            }
        });
    })

app.get('/financeiro', async (request, reply) => {
  const { pago, Cliente_id} = request.query;
  let where = {};

  if (pago) {
    where.pago = Boolean(pago)
  }

  if (Cliente_id) {
    where.Cliente_id = Number(Cliente_id);
  }

  const financeiro = await prisma.financeiro.findMany({
     where,
  });
  
  return financeiro;
}); 

}     