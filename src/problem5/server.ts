import express from "express";
import connectDB from "./utils/database";
import userRoutes from "./routes/userRoutes";

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Connect to MongoDB
connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
