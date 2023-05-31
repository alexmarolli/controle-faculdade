import Fastify from'fastify';
import dotnev from 'dotenv/config';
import { routesUsuario}  from './src/Routes/usuario.js'
import { routesFinananceiro } from './src/Routes/financeiro.js';

const app=Fastify()

routesUsuario(app);
routesFinananceiro(app);

const PORT = process.env.PORT || 3333


app.listen({port: 3333},function(err,address){
    if(err){
        console.log(err)
    }else{
        console.log(`Servidor rodando na porta ${PORT}`)
    }
})