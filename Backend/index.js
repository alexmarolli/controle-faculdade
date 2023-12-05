import Fastify from'fastify';
import dotnev from 'dotenv/config';
import { routesUsuario}  from './src/Routes/usuario.js'
import { routesFinananceiro } from './src/Routes/financeiro.js';
import { routesDocuments } from './src/Routes/movimento.js';
import { routesFormaPagamento } from './src/Routes/formaPagamento.js';
import { routesParceiro} from './src/Routes/parceiro.js';
import { routesProduto } from './src/Routes/Produto.js';
import fastifyCors from '@fastify/cors';


const app=Fastify()

app.register(fastifyCors, {
    origin: 'http://localhost:3000',
  });

routesUsuario(app);
routesFinananceiro(app);
routesDocuments(app)
routesFormaPagamento(app)
routesProduto(app)
routesParceiro(app)

const PORT = 3333;


app.listen({port: 3333},function(err,address){
    if(err){
        console.log(err)
    }else{
        console.log(`Servidor rodando na porta ${PORT}`)
    }
})