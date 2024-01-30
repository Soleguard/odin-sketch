// Reference container
const CONTAINER = document.getElementById("container");

// Iterate through rows
for (let row = 0; row < 16; row++)
{
    // Create row square
    let row_Square = document.createElement("div");

    // Set class
    row_Square.classList.add("row-square");

    // Add to container
    CONTAINER.appendChild(row_Square);

    // Iterate through columns per row
   for (let col = 0; col < 16; col++)
    {
        // Create column square
        let row_Column = document.createElement("div");

        // Set class
        row_Column.classList.add("row-column");

        // Add to container
        CONTAINER.appendChild(row_Column);
    }
}
