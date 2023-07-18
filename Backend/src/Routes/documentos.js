import {  prisma } from '../lib/prisma.js';
import { avista } from './financeiro.js';


export async function routeDocumentos(app){
    app.get('/documents', async(request,reply)=>{

      const {id_cliente,pag_id} = request.query;
      let where={};
      //se existe filtro cliente passar
      if(id_cliente){
        where.id_cliente= Number(id_cliente)
      }
      // filtro de forma de pagamento se tiver filtro 
      if(pag_id){
        where.Pag_id=Number(pag_id)
      }
      console.log (where)
        const documents = await prisma.documento.findMany({
          where,
          orderBy:{
            data:asc,
          }
        })
        return documents
    })

    app.post('/document',async (request, reply)=>{// criação do documento 
        const {usuarioId,id_cliente,Pag_id,saida, valor, descricao, cancelado}= request.body

        const clienteExite = await prisma.cliente.findFirst({
            where: {
                cliente_id: id_cliente  
              }  
        })

        if(!clienteExite){
            return reply.code(404).send({
                message: 'cliente n encontrado'
              });
        }

        if(avista==1){

        const novoDocumento = await prisma.documento.create({
            data: {
              usuarioId,
              id_cliente,
              valor,
              descricao,
              Pag_id,
              saida,
              Financeiro:{
                data:{
                  Pag_id,

                }
              }
            },
          });
        }else{
          const {cliente_id,forma_pag,debCred,dt_vencimento,pago,dt_pago} = request.body;

            const financeiro = await prisma.financeiro.create({
                data: {
                    id_cliente,
                    Doc_controle: novoDocumento.Doc_controle,
                    usuarioId,
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
          return novoDocumento;        
    })
}