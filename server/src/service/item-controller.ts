import { type Request, type Response } from "express";
import { getAllItems, updateItemCount } from "../connection/queries.js";

export async function getItems(req: Request, res: Response) {
  try {
    const items = await getAllItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function updateCount(req: Request, res: Response) {
  try {
    await updateItemCount();
    const updatedItems = await getAllItems();

    res.json({ message: "Update successful", data: updatedItems });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}


