import mongoose from "mongoose";
import express from "express";
import 'dotenv/config';
import Items from "./models/items.js";
import cors from 'cors';

const app = express();
app.use(cors());
const URI = process.env.URI;
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.status(200).send("success");
});

app.get('/api/fetchdata', async (req, res) => {
    res.json(await Items.find());
});

async function connect() {
    try {
        await mongoose.connect(URI);
        console.log("Connected to DB");
        app.listen(PORT, () => { console.log(`Listening on PORT ${PORT}`) });
    } catch (e) {
        console.error(e.message);
    }
}

connect();