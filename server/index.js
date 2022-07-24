const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

app.use(express.json());

const cors = require("cors");
app.use(cors());

mongoose.connect(
  //"mongodb+srv://derder:C2TZw7axwmCxcEVu@cluster0.fviqd.mongodb.net/recipe?retryWrites=true&w=majority"
  "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.2vat0.mongodb.net/recipe?retryWrites=true&w=majority"
);


app.get("/read", async (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.delete("/delete/:id", async (req, res) => {
  console.log("req.params.id= ", req.params.id);
  await UserModel.findByIdAndRemove(req.params.id).exec();
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


app.post("/insert", async (req, res) => {
  const recipe = new UserModel({
    title: req.body.title, 
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    time:req.body.time,
    id: req.body.id});
  try {
    await recipe.save();
  } catch(err) {
    console.log(err)
  }
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.put("/update", async (req, res) => {
   const newIngredients = req.body.newIngredients;
   const id = req.body.id;
  
  try {
    await UserModel.findById(id, (err, updatedRecipe)=>{
      updatedRecipe.ingredients = newIngredients;
      updatedRecipe.save();
      //res.send("update");
  });
  } catch(err) {
    console.log(err)
  } 
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  }); 
});



app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
