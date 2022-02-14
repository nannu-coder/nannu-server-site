const express = require('express')
const app = express()
const { MongoClient } = require('mongodb');
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();

//middleware
app.use(express.json());
app.use(cors());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aik0x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
        await client.connect();
        const database = client.db("sample_mflix");
        const movies = database.collection("movies");




    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Server Running!')
})

app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})