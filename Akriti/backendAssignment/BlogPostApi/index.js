let express=require("express");
let app=express();
let port=8080;

app.use(express.json());

let posts=[
    {
        title:"this is for electronic items",
        content:"fjhfj fbjfjrhjf dnjbhfbhrb jbfdbfdbfj dbfbdfndb jdfbhfgyrh"
    }
];

app.get("/blog",(req,res)=>{
    res.json(posts);
});

app.post("/blog",(req,res)=>{
    let {title,content} = req.body;


    if(!title || !content){
        throw new Error("Title and Content both is required");
    }

    posts.push({title:title,content:content});

    res.status(500).json("You are Blog is succesfully created");

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