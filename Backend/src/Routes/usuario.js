//import { PrismaClient } from "@prisma/client"
import {prisma} from '../lib/prisma.js'

//const prisma=new PrismaClient();

export async function routesUsuario(app){
    app.get('/teste/',async ()=>{
        const user = await prisma.usuario.findMany({
            orderBy:{
               nome:'desc'
            }
        })
        return user;
    })

    app.post('/new-user', async (request, reply)=>{
        try {
            const { id, nome, senha } = request.body;
            
            const usuarioExistente = await prisma.usuario.findFirst({
            where: {
                nome: {
                equals: nome,
                    },
                },
            });

            if (usuarioExistente) {
            // Se o usuário já existe, retornar um erro indicando que o nome de usuário está em uso
            reply.status(430).send('Nome de usuário já está em uso.');
            return;
            }

            const novoUsuario = await prisma.usuario.create({
                data: {
                    id,
                    nome,
                    senha,
                },
            });

            console.log(novoUsuario)
            reply.send(novoUsuario);
        } catch (error) {
            console.error(error);
            reply.status(500).send('Erro ao cadastrar usuario');
        }
    });

app.get('/login', async (request, reply) => {
  try {
    const { nome, senha } = request.query;

    // Verificar se o usuário existe
    const usuario = await prisma.usuario.findFirst({
      where: {
        nome: {
          equals: nome,
        },
      },
    });

    if (!usuario) {
      reply.status(401).send('Usuário não encontrado');
      return;
    }

    // Verificar se a senha está correta
    if (usuario.senha !== senha) {
      reply.status(403).send('Senha incorreta');
      return;
    }

    // Usuário autenticado com sucesso
    reply.send('Autenticação bem-sucedida');
  } catch (error) {
    console.error(error);
    reply.status(500).send('Erro durante a autenticação');
  }
});

}