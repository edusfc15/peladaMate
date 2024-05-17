import mongoose from "mongoose";


const jogadorSchema = new mongoose.Schema(
    { 
        id: { type: String },
        nome: { type: String, required: true}
    }
);

const jogadores = mongoose.model("jogadores", jogadorSchema);

export default jogadores;