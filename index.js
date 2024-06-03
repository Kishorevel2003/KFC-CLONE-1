const express = require('express')
const app=express()//routes and middleware->get...,req,res
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.get('/',(req,res) =>{
    res.send('Hello World!')
})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://ivkvkishore:kishoreveli.2024@cluster0.gxxjqbu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const productfood=client.db("product").collection("food");

    app.post("/uploadfood",async (req,res) => {
        const data=req.body;
        const result=await productfood.insertOne(data);
        res.send(result);
    })

    app.get("/all-foods",async(req,res)=>{
      const Foods=productfood.find();
      const result=await Foods.toArray();
      res.send(result)
    })
    app.get("/foods/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await productfood.findOne(filter);
      res.send(result);
    })
    app.patch('/FOOD/:id',async(req,res)=>{
      const id=req.params.id;
      const updateFooddata=req.body;
      const filter={_id:new ObjectId(id)};
      const updateDoc={
        $set:{
          ...updateFooddata
        },
    }
      const options={upsert:true};
      const result=await productfood.updateOne(filter,updateDoc,options);
      res.send(result);
    })

    app.delete('/food/:id',async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await productfood.deleteOne(filter);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})