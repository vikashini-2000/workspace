var mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp-camp", {useNewUrlParser:true, useUnifiedTopology:true});

var catSchema = new mongoose.Schema({
    name:String,
    age:Number,
    temperament:String
});

var Cat = mongoose.model("Cat", catSchema);