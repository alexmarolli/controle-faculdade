import {  prisma } from '../lib/prisma.js';
export async function routesProduto(app){

   


    app.get('/Produto/',async ()=>{
        const Produto = await prisma.Produto.findMany({
            orderBy:{
              id_produto: 'asc'
            }
        })
        return Produto;
    })


    app.delete('/Produto/:id', async (request, reply) => {
        const { id } = request.params;
      
        const deletedProduto = await prisma.produto.delete({
          where: {
            id_produto: parseInt(id),
          },
        });
      
        return deletedProduto;
      });



    app.put('/Produto/:id', async (request, reply) => {
        const { id } = request.params;
        const { cod_barras, descricao, valor_v, valor_c, estoque, docItens } = request.body;
      
        const updatedProduto = await prisma.produto.update({
          where: {
            id_produto: Number(id),
          },
          data: {
            cod_barras,
            descricao,
            valor_v,
            valor_c,
            estoque,
            docItens,
          },
        });
      
        return updatedProduto;
      });



    app.post('/Produto',async (request, reply)=>{
        const {id_produto,cod_barras, descricao, valor_v, valor_c, estoque, docItens}= request.body
    
        const novoProduto = await prisma.produto.create({
            data: {
                id_produto,
                cod_barras, 
                descricao, 
                valor_v, 
                valor_c, 
                estoque, 
                docItens
            },
            
          });
    
          return novoProduto;     
          
          
          
          
    })



}






