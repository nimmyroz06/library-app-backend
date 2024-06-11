const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "title":String,
        "category":String,
        "pyear":String,
        "author":String,
        "descrip":String,
        "distname":String,
        "publi":String,
        "edition":String
    }
)
let librarymodel=mongoose.model("library",schema);
module.exports={librarymodel}