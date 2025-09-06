import express from "express";
import cors from "cors";
import { connectDatabase } from "../connection/index.js";
import { getItems, updateCount } from "./item-controller.js";

export async function initServer() {
  const app = express();
  const port = 3001;

  app.use(cors());
  app.use(express.json());

  app.get("/api/data", getItems);
  app.post("/api/update", updateCount);

  try {
    await connectDatabase();
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}
