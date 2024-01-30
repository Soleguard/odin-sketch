// Reference container
const CONTAINER = document.getElementById("container");

// Iterate through rows
for (let row = 0; row < 16; row++)
{
    // Iterate through columns
   for (let col = 0; col < 16; col++)
    {
        // Create square div
        let square = document.createElement("div");

        // Set class
        square.classList.add("square");

        // Add to container
        CONTAINER.appendChild(square);
    }
}
