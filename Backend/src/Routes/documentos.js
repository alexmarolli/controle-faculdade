import {  prisma } from '../lib/prisma.js';

export async function routesDocuments(app){

    app.get('/search_document',async(request)=>{
        const {pag_id, parceiro}= request.query;
        let where={};

        if(pag_id){
            where.pag_id= Number(pag_id);
            console.log("o id é",pag_id);
        }
        if(parceiro){
            where.parceiro=Number(parceiro);
            console.log("o id do cliente é",parceiro);
        }

        const documentos = await prisma.documento.findMany({
            where,
            orderBy:{
                data:"desc"
            }
        })
        return documentos;

    })


    app.post('/create_document',async (request, reply) =>{
        
        const {descricao, usuarioId, id_cliente,saida,valor, pag_id}= request.body;

        let cliente = await prisma.parceiro.findFirst({
        //    select:{
                id_cliente:true,
                where:{
                    id_cliente:id_cliente
                }
        //    }
        })
        if(!cliente){
            reply.send('Não foi possivel criar o documento !')
        }

        let documento = await prisma.parceiro.create({
            data:{
                descricao,
                usuarioId,
                id_cliente,
                saida,
                data: new Date(),
                valor,
                pag_id,
               /* Financeiro:{
                    create:{
                        forma_pagPag_id:pag_id,
                        Doc_controle,
                        
                    }
                }*/
            }
        })
        reply.send(documento);
    })
}