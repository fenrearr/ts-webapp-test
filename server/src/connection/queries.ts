import type { Item } from "../types/index.js";

import { connection } from "./index.js";

export async function getAllItems(): Promise<Item[]> {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM items";
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results as Item[]);
      }
    });
  });
}

export async function updateItemCount(): Promise<void> {
  return new Promise((resolve, reject) => {
    const updateQuery = `
      UPDATE items 
      SET count = count + 1, last_updated = NOW() 
      WHERE id = 1
    `;

    connection.query(updateQuery, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}
