import {  prisma } from '../lib/prisma.js';


export async function routeDocumentos(app){
    app.get('/documents', async(request,reply)=>{
      const {id_cliente,pag_id} = request.query;
      let where={};

      if(id_cliente){
        where.id_cliente= Number(id_cliente)
      }

      if(pag_id){
        where.Pag_id=Number(pag_id)
      }
      console.log (where)
        const documents = await prisma.documento.findMany({
          where,
        })
        return documents
    })

    app.post('/document',async (request, reply)=>{// criação do documento 
        const {usuarioId,id_cliente,Pag_id,saida, valor, descricao, cancelado,}= request.body

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

        const novoDocumento = await prisma.documento.create({
            data: {
              usuarioId,
              id_cliente,
              valor,
              descricao,
              Pag_id,
              saida,
            },
          });

          const vencimento = await prisma.forma_pag.findFirst({
            where:{
                pag_id:forma_pag,
                prazo:true
            }
        })

        if(!vencimento){
            const financeiro = await prisma.financeiro.create({
                data: {
                    id_cliente,
                    Doc_controle: novoDocumento.Doc_controle,
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
          return novoDocumento;        
    })
}