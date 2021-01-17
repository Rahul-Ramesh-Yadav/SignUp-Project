const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/register");
const port = process.env.PORT || 3000;

//const static_path = path.join(__dirname,"../public");
//const template_path = path.join(__dirname,"../templates/views");
//const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//app.use(express.static(static_path));
//app.set("view engine","hbs");
//app.set("views",template_path);
//hbs.registerPartials(partials_path);

app.get("/",(req,res) => {
res.render("index")
});

app.get("/register",async(req,res) => {
    //res.render("register");
        try{
            const insertU = await Register.find({});
            res.status(201).send(insertU);
        }catch(e){
            res.status(400).send(e);
        }
        //res.render("register");

        //const regis = await Register.find({});
        //res.status(201).send(regis);
 
})

app.post("/register",async(req,res) => {
    try{
        //console.log(req.body.firstname);
        //res.send(req.body.firstname);

            const register = new Register(req.body);
            console.log(req.body);
            register.save();
    } catch(error){
        res.status(400).send(error);
    }
})

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
});
