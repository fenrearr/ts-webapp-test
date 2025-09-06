import type { Item } from "./types";

const apiBase = "http://localhost:3001/api";
const resultDiv = document.getElementById("result") as HTMLDivElement;
const button = document.getElementById("myButton") as HTMLButtonElement;

button.addEventListener("click", UpdateData);
document.addEventListener("DOMContentLoaded", LoadInitialData);

async function UpdateData() {
  console.log("clicked");
  const response = await fetch(`${apiBase}/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();

  DisplayData(result.data[0]);
}

async function LoadInitialData() {
  const response = await fetch(`${apiBase}/data`);
  const data = await response.json();

  DisplayData(data[0]);
}

function DisplayData(item: Item) {
  resultDiv.innerHTML = `
            <h3>Current Data:</h3>
            <p>Button has been clicked <strong>${item.count}</strong> times</p>
            <p>Last updated: ${new Date(item.last_updated).toLocaleString()}</p>
        `;
}
