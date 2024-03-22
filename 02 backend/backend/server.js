import  Express  from "express";
const app=Express();

// app.get('/' , (req , res)=>{
//     res.send("Start backend");
// })

// get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
           id:1,
           title:"A joke",
           content:"This is a joke"
        },
        {
           id:2,
           title:"Another joke",
           content:"This is 2nd joke"
        },
        {
           id:3,
           title:"Third joke",
           content:"This is 3rd joke"
        },
        {
           id:4,
           title:"A joke",
           content:"This is 4nd joke"
        },
        {
           id:5,
           title:"A joke",
           content:"This is 5th joke"
        }
    ]
    res.send(jokes);
})

const port=process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log(`Server at http://localhost:${port}`);
})