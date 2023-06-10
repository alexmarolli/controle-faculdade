import {  prisma } from '../lib/prisma.js';


export async function routeDocumentos(app){
    app.get('/documents', async()=>{
        const documents = await prisma.documento.findMany()
    })

    app.post('/document',async (request, reply)=>{
        const {usuarioId,id_cliente,Pag_id,saida, valor, descricao}= request.body

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
            },
          });

          return novoDocumento;        
    })
}