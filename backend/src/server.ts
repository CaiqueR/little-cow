import express from 'express';


const app = express();
const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
    res.json({msg: 'ok'});  
});

app.listen(PORT, ()=>{
    console.log(`Escutando na porta ${PORT}`);
});
