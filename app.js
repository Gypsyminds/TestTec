const express = require("express");
const {Sequelize }= require("sequelize");
const {task} = require('./models/task');
const bodyParser = require("body-parser");



const sequelize = new Sequelize('test','root','root',{
    dialect:"mysql",
host :"localhost"

});

const doing =()=>{};
(async ()=> {
    try{
        await sequelize.authenticate();
       // await task.sync({alter :true});
        console.log("ok");

    }catch (error){
        console.error("not ok");

    }
}) ();
const app = express();

app.get('/',(req,res)=> {
res.send('hello');
});


app.listen(3000,()=>{
console.log("satrting ..");
});


const taskroute= require("./routes/taskroute");
app.use("/task" ,taskroute );