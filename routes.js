module.exports = function(app){
    app.get("/", (req,res)=>{
        res.end("hello world");
    });
    
    app.post("/me", (req,res)=>{
        let myAnswer = {
            time: Date.now(),
            greeting: `hello ${req.body.name}! have a good day`,
        }
        res.json(myAnswer);
    })
}