import {  prisma } from '../lib/prisma.js';

export async function routesParceiros(app){
    app.get('/ver-parceiro',async ()=>{
        const parceiro = await prisma.parceiro.findMany({
            orderBy:{
                parceiro_id: 'asc'
            }
        })
        return parceiro;
        
    })

    app.delete('/exluir-parceiro/:id', async (request, reply) => {
        const { id } = request.params;
      
        const deletedParceiro = await prisma.parceiro.delete({
          where: {
            parceiro_id: parseInt(id),
          },
        });
      
        return deletedParceiro;
      });



    app.put('/alterar-parceiro/:id', async (request, reply) => {
        const { id } = request.params;
        const { cpfCnpj, email, nome, telefone, endereco, numero } = request.body;
      
        //faz uma vereificação de CPF, pra não poder ter 2 iguais 
      
        const updatedParceiro = await prisma.parceiro.update({
          where: {
            parceiro_id: Number(id),
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
      
        return updatedParceiro;
      });



    app.post('/criar-parceiro',async (request, reply)=>{
        const {parceiro_id, cpfCnpj, email, nome, telefone, endereco, numero}= request.body
    
        const novoParceiro = await prisma.parceiro.create({
            data: {
                parceiro_id,
                cpfCnpj, 
                email, 
                nome, 
                telefone, 
                endereco, 
                numero,
            },
            
          });
    
          return novoParceiro;     
          
          
          
          
    })
}