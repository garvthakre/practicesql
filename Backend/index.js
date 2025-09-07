import express from "express";





const app = express();
app.use(express.json());

const PORT =   3000;

app.get("/",(req,res)=>{
    res.send ("hello world")
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})


export default app;