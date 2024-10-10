let express=require("express");
let app=express();
let port=8080;

app.use(express.json());

let products=[
    {
        name:"product1",
        price:50
    }
];

app.get("/products",(req,res)=>{
    res.json(products);
});

app.post("/products",(req,res)=>{
    let {name,price} = req.body;


    if(!name || !price){
        throw new Error("Product name and price both is required");
    }

    products.push({name:name,price:price});

    res.status(500).json({message : "Product added successfully", products: products});

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