import express from "express"
import cors from "cors"
import {clerkMiddleware} from "@clerk/express"

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import notificationRoutes from "./routes/notification.route.js";
import { arcjetMiddleware } from "./middleware/arcject.middleware.js";

const app = express();

app.use(cors())
app.use(express.json())

app.use(clerkMiddleware()); //auth
app.use(arcjetMiddleware); //custom

app.get("/",(req,res)=> res.send("Hello from server"))

app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/notifications",notificationRoutes);

//error handling middleware
app.use((err, req, res, next) => {
    console.error("Unhandled error:", err);
    res.status(500).json({error: err.message || "Internal server error"});
});

const startServer = async () => {
    try {
        await connectDB();


        //listen for local development
        if (ENV.NODE_ENV !== "Production") {
            app.listen(ENV.PORT, ()=> console.log("server is up and running on PORT:",ENV.PORT));
        }
    }catch(error) {
        console.error("Failed to start Server:", error.message);
        process.exit(1);
    }
};

startServer();

//export for vercel
export default app;
