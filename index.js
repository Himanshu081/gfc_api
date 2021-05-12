const express =require ('express');
const getHospitalData =require('./getData');
const port = process.env.PORT || 3000;

const app = express();

app.get('/',(req,res)=>{
    res.send("HomePage");

})
app.get('/api/hospitals',async (req,res)=> {
    const hospitals =await getHospitalData();
    res.json(hospitals);

    
});

app.listen(port,()=>{
    console.log('Listening at http://localhost:'+port);
});


