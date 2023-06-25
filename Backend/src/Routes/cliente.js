import {  prisma } from '../lib/prisma.js';

export async function routesCliente(app){
    app.get('/cliente/',async ()=>{
        const cliente = await prisma.cliente.findMany({
            orderBy:{
                cliente_id: 'asc'
            }
        })
        return cliente;
        
    })

    app.delete('/cliente/:id', async (request, reply) => {
        const { id } = request.params;
      
        const deletedCliente = await prisma.cliente.delete({
          where: {
            cliente_id: parseInt(id),
          },
        });
      
        return deletedCliente;
      });



    app.put('/cliente/:id', async (request, reply) => {
        const { id } = request.params;
        const { cpfCnpj, email, nome, telefone, endereco, numero } = request.body;
      
        //faz uma vereificação de CPF, pra não poder ter 2 iguais 
      
        const updatedCliente = await prisma.cliente.update({
          where: {
            cliente_id: Number(id),
          },
          data: {
            cpfCnpj,
            email,
            nome,
            telefone,
            endereco,
            numero, 
          },
        });
      
        return updatedCliente;
      });



    app.post('/cliente',async (request, reply)=>{
        const {cliente_id, cpfCnpj, email, nome, telefone, endereco, numero}= request.body
    
        const novoCliente = await prisma.cliente.create({
            data: {
                cliente_id,
                cpfCnpj, 
                email, 
                nome, 
                telefone, 
                endereco, 
                numero,
            },
            
          });
    
          return novoCliente;     
          
          
          
          
    })
}