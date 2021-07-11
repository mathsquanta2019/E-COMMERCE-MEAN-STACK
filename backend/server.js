import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products',(request,response) => {
    response.send(data.products);
});

app.get('/',(request, response) =>{
    response.send('Sever is up and running');
});
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Service running on http://localhost:${port}`);
})