  import { prisma } from '../lib/prisma.js';

  export async function routesProduto(app) {
    app.get('/informacoes-itens', async (request, reply) => {
      try {
        const produtos = await prisma.produto.findMany({
          orderBy: {
            id_produto: 'asc',
          },
        });
        reply.send(produtos);
      } catch (error) {
        console.error(error);
        reply.status(500).send('Erro ao obter informações dos itens');
      }
    });

    app.delete('/Excluir-itens/:id', async (request, reply) => {
      try {
        const { id } = request.params;

        const deletedProduto = await prisma.produto.delete({
          where: {
            id_produto: parseInt(id),
          },
        });

        reply.send(deletedProduto);
      } catch (error) {
        console.error(error);
        reply.status(500).send('Erro ao excluir o item');
      }
    });

    app.put('/alterar-itens/:id', async (request, reply) => {
      try {
        const { id } = request.params;
        const { cod_barras, descricao, valor_v, valor_c, estoque} = request.body;

        const updatedProduto = await prisma.produto.update({
          where: {
            id_produto: string(id),
          },
          data: {
            cod_barras,
            descricao,
            valor_v,
            valor_c,
            estoque,
          },
        });

        reply.send(updatedProduto);
      } catch (error) {
        console.error(error);
        reply.status(500).send('Erro ao atualizar o item');
      }
    });

    app.post('/cadastrar-itens', async (request, reply) => {
      try {
        const { id_produto, cod_barras, descricao, valor_v, valor_c, estoque} = request.body;

        const novoProduto = await prisma.produto.create({
          data: {
            id_produto,
            cod_barras,
            descricao,
            valor_v,
            valor_c,
            estoque,
          },
        });

        // add para movimentação
        
        await prisma.movimentacao.create({
          data: {
            status: 'Entrada',
            desc: `Produto cadastrado: ${novoProduto.descricao} \nValor da entrada: ${novoProduto.valor_v} `,
          },
        });

        // Verificar funcionamento e se é valor_v ou valor_c 

        reply.send(novoProduto);
      } catch (error) {
        console.error(error);
        reply.status(500).send('Erro ao cadastrar o item');
      }
    });
  }
