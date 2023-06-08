import { Prisma, prisma } from "../lib/prisma";

export async function routeDocumentos(app){
    app.get('/documents', async()=>{
        const documents = await prisma.documento.findMany()
    })
    usuarioId=1;

    app.post('/document',async (request, reply)=>{
        const {usuarioId,cliente, valor, descricao}= request.body

        const clienteExite = await prisma.cliente.findUnique({
            where:{
                cliente_id:cliente
            }
        })

        if(!clienteExite){
            return reply.code(404).send({
                message: 'Conta não encontrada',
              });
              return console.log('cliente n encontrado')
        }

        // /*const userExiste = await prisma.usuario.findUnique({
        //     where:{
        //         id:usuarioId
        //     }
        // })
        // if(!userExiste){
        //     return reply.code(404).send({
        //         message:'Usuario '
        //     })
        // }*/
        const createDocument = await prisma.documento.create({
            data:{
                usuarioId,
                id_cliente,
                valor,
                descricao 
            }
        })
        
    })
}