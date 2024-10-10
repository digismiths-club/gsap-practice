const express=require("express");
const app=express();
const mongoose=require("mongoose");
const port=8080;

let Mongo_URL="mongodb://127.0.0.1:27017/wanderlust";

app.use(express.json());

async function main(){
    mongoose.connect(Mongo_URL);
}

main().then((res)=>{
    console.log("Connection Succesful");
}).catch((err)=>{
    console.log(err);
});

const schemaUser=new mongoose.Schema({
    name:String,
    email:String
});

const User=mongoose.model("User",schemaUser);

app.get("/users",async(req,res)=>{
    let users=await User.find();
    console.log(users);
    res.json(users);
});

app.post("/users",async(req,res)=>{
    let {name, email} = req.body;
    if(!name || !email ){
        res.status(400).json({error:"Name and email is required"});
    }

    let newUser=new User({name,email});
    newUser.save();

    res.status(201).json({message:"User data is saved succesfully", user:newUser});
})


app.use("/",(req,res)=>{
    res.send("<h1>Root Page</h1>");
});

app.use("*",(req,res)=>{
    res.send("<h1>Page not found</h1>")
})

app.listen(port ,()=>{
    console.log("listening to port "+port);
});