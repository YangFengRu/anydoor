const Koa=require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const koaBody = require("koa-body");
const jwt = require("jsonwebtoken");


const app = new Koa();
app.use(serve(__dirname+'/static'));
app.use(koaBody({
    multipart:true,
}));

const router= new Router();

const secret = "123ehkj2rh3r4";
router.post("/login",(ctx)=>{
    console.log("+++++++++++")
    const { username,passwd} = ctx.request.nody;
    if (username==='h'&&passwd==='123') {
        const token = jwt.sign({uId:1},secret,
            {expiresIn:"2h"});

        ctx.body = {
            msg:"login success",
            data:{token},
        }
    } else {
        ctx.body={
            // token,
            msg:"login fail",
            data:{},
        }
    }
});

app.use(router.routes());
app.listen(8080,()=>{
    console.log("success")
});