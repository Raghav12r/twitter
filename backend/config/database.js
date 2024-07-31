import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "../config/.env"
});

const url = "mongodb+srv://raghwendrachauhan6:Rajeet12%40@cluster0.w7if9tp.mongodb.net/twitter";

const databaseConnection = async () => {
    try {
        const connect = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database connected: ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default databaseConnection;
