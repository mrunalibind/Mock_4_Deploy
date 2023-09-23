let express=require("express");
const { connection } = require("./db");
const { bookRouter } = require("./route/book_route");
let app = express();
let cors=require("cors")
app.use(cors());
app.use(express.json());
app.use("/book",bookRouter);

app.get("/",(req,res)=>{
    res.send("/ Page")
})

app.listen(8090,async()=>{
    try {
        await connection;
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
    }
    console.log("server is running on port 8090")
})