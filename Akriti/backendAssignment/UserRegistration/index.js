let express=require("express");
let app=express();
let port=8080;

app.use(express.json());

let users=[
    {
        name:"product1",
        email:"sfd@gmail.com"
    }
];

// app.get("/users",(req,res)=>{
//     res.json(users);
// });

app.post("/register",(req,res)=>{
    let {name,email} = req.body;


    if(!name || !email){
        throw new Error("Your name and email both is required");
    }

    users.push({name:name,email:email});

    console.log(users);

    res.status(500).json("You are succesfully registered");

});

app.use("/",(req,res)=>{
    res.send("<h1>Root Page</h1>");
});

app.use("*",(req,res)=>{
    res.send("<h1>Page not found</h1>")
})

app.listen(port ,()=>{
    console.log("listening to port "+port);
});