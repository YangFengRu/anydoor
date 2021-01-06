const Koa=require('koa');
const app = new Koa();
app.use((ctx)=>{
    ctx.body={
        msg:'hello'
    }
});
app.listen(8081);