import {  prisma } from '../lib/prisma.js';


export async function routeDocumentos(app){
    app.get('/documents', async(request,reply)=>{
      const {cliente_id,Pag_id} = request.query;
      let where={};

      if(cliente_id){
        where.cliente_id= Number(cliente_id)
      }

      if(Pag_id){
        where.Pag_id=Number(doc_controle)
      }
      console.log (where)
        const documents = await prisma.documento.findMany(
          where,
        )
        return documents
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
              Pag_id,
              saida
            },
          });

          return novoDocumento;        
    })
}