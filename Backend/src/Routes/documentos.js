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
        
        const {usuarioId} = request.query;

        const {descricao,parceiro_id,saida,valor,Pag_id} = request.body;

        const cliente_existe = await prisma.parceiro.findMany({
            where:{
                parceiro_id,
            }
        });
   

        if(cliente_existe.length===0){
            return ("Cliente não encontrado");
        }

        console.log(cliente_existe);

        const create_document = await prisma.documento.create({
            data:{
                descricao,
                usuarioId:parseInt(usuarioId),
                id_cliente:parceiro_id,
                saida,
                data: new Date(),
                valor,
                Pag_id,
                /*Financeiro:{
                    create:{
                        Doc_controle:create_document.Doc_controle,
                        id_cliente:parceiro_id,
                        usuarioId:parseInt(usuarioId),
                        Pag_id,
                        debCred,
                        dt_create: new Date(),
                        valor,
                        cancelado,
                        pago,
                        dt_pago,
                        dt_vencimento
                    }
                }*/
            }
        })
        
        return (create_document);

    })
}