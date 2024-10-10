let express=require("express");
let app=express();
let port=8080;

app.use(express.json());

let allTasks=["Sleep","Drink","Coding","Drawing"];

app.get("/tasks",(req,res)=>{
    res.json(allTasks);
});

app.post("/tasks",(req,res)=>{
    let {title} = req.body;

    console.log(title);

    if(!title){
        throw new Error("Task title is required");
    }

    allTasks.push(title);

    res.status(500).json({message : "Task added successfully", tasks: allTasks});

});

app.delete("/tasks",(req,res)=>{
    let {title} = req.body;

    if(!title){
        throw new Error("Task title is required");
    }

    let tasks = allTasks.filter(ele=>ele!==title);
    console.log(allTasks+" "+ tasks);

    if(allTasks.length != tasks.length){
        allTasks=tasks;
        res.json({message : "Task deleted successfully" , tasks : allTasks});
    }else{
        console.log("Error");
        throw new Error("Task not found");
    }

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