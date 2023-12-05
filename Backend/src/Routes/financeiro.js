import {  prisma } from '../lib/prisma.js';
import { prazo } from '../lib/create-financeiro.js';
import {z} from "zod"


export async function routesFinananceiro(app){
    app.get('/finan/',async ()=>{
        const finan = await prisma.financeiro.findMany({
            orderBy:{
                dt_create: 'desc'
            }
        })
        return finan;
    })

    app.post('/create_fin', async (request, reply)=>{
        const createFiananceiroBody = z.object({
            parceiro_id: z.number(),
            usuarioId: z.number(),
            pag_id:z.number(),
            valor: z.number(),
            dt_vencimento: z.date().or(z.null()),
            credito: z.boolean(),
            pago:z.boolean(),
        })
    
        const {parceiro_id,usuarioId,pag_id,credito,dt_vencimento,valor,pago}=createFiananceiroBody.parse(request.body)

        const Prazo= prazo(pag_id)

        if(Prazo){
            await prisma.financeiro.create({
                data:{
                    parceiro_id,
                    Pag_id:pag_id,
                    usuarioId,
                    credito,
                    valor,
                    pago:pago,
                    dt_vencimento:null,
                }
            })
            console.log("deu certo")
        }
        else{
            await prisma.financeiro.create({
                data:{
                    parceiro,
                    Pag_id:pag_id,
                    usuarioId,
                    credito,
                    valor,
                    pago,
                    dt_vencimento
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