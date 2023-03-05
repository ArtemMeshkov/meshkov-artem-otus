import data from "./data.json"
import "./my-tree"

function drawTree(data) {
  document.querySelector("my-tree").setAttribute("data", JSON.stringify(data))
}

drawTree(data)