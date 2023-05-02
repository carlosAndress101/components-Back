import mongoose from "mongoose";
import {MONGO_URI} from "../middleware/config.js";

(async () => {
    try {
        const connect = await mongoose.connect(MONGO_URI);
        console.log(`DB connected to ${connect.connection.name}`)
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1)
    }
})();