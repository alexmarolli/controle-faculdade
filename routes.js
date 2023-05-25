/**
 * @param {import("fastify").FastifyInstance} fastify
 * @param {Object} options
 */
async function routes(fastify, options) {
    fastify.get("/produtos", async (req, res) => {
        return fastify.prisma.produtos.findMany();
    });

    const postBodyJsonSchema = {
        type: "object",
        required: ["produto"],
        properties: {
            animal: { type: "string"},
        },
    };

    fastify.put(
        "/produtos/:produtosId",
        { body: postBodyJsonSchema },
        async (req, res) => {
            const produtoId = parseInt(req.params.produtoId);
            const produtoDescricao = req.body.produto;
            return fastify.prisma.animal.update({
                where: { id: produtoId },
                data: { descricao: produtoDescricao },
            });
        }
    );

    fastify.delete("/produtos/:produtosId", async (req, res) => {
        const produtoId = parseInt(req.params.produtoId);
        return fastify.prisma.produtos.delete({
            where: {
                id: produtoId,
            },
        });
    });
}

export default routes;