import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const seedData = [
    { descricao: 'Martelo' },
    { descricao: 'Prego' },
    { descricao: 'Alicate' },
];

async function main() {
    for (const a of seedData) {
        const produto = await prisma.produto.create({ data: a });
    }
}


main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (err) => {
        console.log(err);
        await prisma.$disconnect();
        process.exit(1);
    });