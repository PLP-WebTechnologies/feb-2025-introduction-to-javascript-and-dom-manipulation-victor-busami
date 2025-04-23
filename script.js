// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", () => {
  const text = document.getElementById("dynamic-text");
  text.textContent = "The text has been updated!";
  text.style.color = "blue"; // Modify CSS via JS
  text.style.fontWeight = "bold";
});

// Add or remove an element when a button is clicked
document.getElementById("toggle-box-btn").addEventListener("click", () => {
  const container = document.getElementById("box-container");
  const existingBox = document.getElementById("dynamic-box");

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const newBox = document.createElement("div");
    newBox.id = "dynamic-box";
    newBox.textContent = "I'm a new box!";
    newBox.style.width = "200px";
    newBox.style.height = "100px";
    newBox.style.backgroundColor = "lightcoral";
    newBox.style.marginTop = "10px";
    newBox.style.display = "flex";
    newBox.style.alignItems = "center";
    newBox.style.justifyContent = "center";
    container.appendChild(newBox);
  }
});
