import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lucas:123@cluster0.pkhjobt.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;