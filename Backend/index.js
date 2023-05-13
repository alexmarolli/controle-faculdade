const Fastify= require('fastify');

const app=Fastify();

app.get('/',function(request,reply){
    reply.send({hello:'wordl!'});
});

app.listen({port: 8080},function(err,address){
    if(err){
        app.log.error(err)
        process.exit(1)
    }else{
        console.log('Servidor rodando na porta 8080')
    }
});    