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
}