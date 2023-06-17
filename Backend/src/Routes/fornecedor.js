import {  prisma } from '../lib/prisma.js';

export async function routesFornecedor(app){
    app.get('/fornecedor/',async ()=>{
        const fornecedor = await prisma.fornecedor.findMany({
            orderBy:{
                fornecedor_id: 'asc'
            }
        })
        return fornecedor;
        
    })

    

    app.delete('/fornecedor/:id', async (request, reply) => {
        const { id } = request.params;
      
        const deletedFornecedor = await prisma.fornecedor.delete({
          where: {
            fornecedor_id: parseInt(id),
          },
        });
      
        return deletedFornecedor;
      });



    app.put('/fornecedor/:id', async (request, reply) => {
        const { id } = request.params;
        const { cpfCnpj, email, nome, telefone, endereco, numero } = request.body;
      
        const updatedFornecedor = await prisma.fornecedor.update({
          where: {
            fornecedor_id: Number(id),
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
      
        return updatedFornecedor;
      });



    app.post('/fornecedor',async (request, reply)=>{
        const {fornecedor_id, cpfCnpj, email, nome, telefone, endereco, numero}= request.body
    
        const novoFornecedor = await prisma.fornecedor.create({
            data: {
                fornecedor_id,
                cpfCnpj, 
                email, 
                nome, 
                telefone, 
                endereco, 
                numero,
            },
            
          });
    
          return novoFornecedor;     
          
          
          
          
    })



}