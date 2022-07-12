 const { MongoClient } = require("mongodb");

//const username = encodeURIComponent("m001-student");
//const password = encodeURIComponent("m001-mongodb-basics");
//const cluster = "Sandbox";
//const authSource = "<authSource>";
//const authMechanism = "<authMechanism>";

let uri =
"mongodb+srv://m001-student:m001-mongodb-basics@sandbox.2vat0.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri);

async function run() {
    
  try {
    await client.connect();

    //
    // await createRecipes(client, {
    //     title:"Rice",
    //     ingredients:"123",
    //     instructions:"",
    //     id:"",
    // })

    const database = client.db("video");
    const recipes = database.collection("recipeList");

    // const cursor = recipes.find();

    // await cursor.forEach(doc => console.dir(doc));     
    
  } finally {
    await client.close();
  }
  
}
run().catch(console.dir);

export default run();


async function createRecipes(client, newListing) {
    const result = client.db("video").collection("recipeList").insertOne(newListing);

    console.log("new listing created with the following id: '${result.insertedId}'");    
}

async function createMultipleRecipes(client, newListing) {
    const result = client.db("video").collection("recipeList").incertMany(newListing);
    console.log(result.insertedIds);

}

async function findOneListingByName(client, nameOfListing) {
    // See findOne() docs
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({ name: nameOfListing });

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}
