import {  prisma } from '../lib/prisma.js';

export async function routesFinananceiro(app){
    app.get('/finan/',async ()=>{
        const finan = await prisma.financeiro.findMany({
            orderBy:{
                fin_id: 'asc'
            }
        })
        return finan;
    })
}