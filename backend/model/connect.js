import mongoose from "mongoose";
const url = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/livraria";
mongoose.connect(url)
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.error("Erro Mongo:", err));
