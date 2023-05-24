const Fastify= require('fastify');
const dotenv = require('dotenv');

const app=Fastify();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 3000


app.get('/',function(request,reply){
    reply.send({hello:'world!'});
});

app.listen({port: PORT},function(err,address){
    if(err){
        app.log.error(err)
        process.exit(1)
    }else{
        console.log(`Servidor rodando na porta ${PORT}`)
    }
});    