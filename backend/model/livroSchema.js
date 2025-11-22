import mongoose from "mongoose";
const LivroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    ano: Number
});
export default mongoose.model("Livro", LivroSchema);
