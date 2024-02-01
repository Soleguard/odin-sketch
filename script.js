// Reference container
const CONTAINER = document.getElementById("container");

// Loop 16 times
for (let iteration = 0; iteration < 16; iteration++)
{
    // Create column to occupy squares
    let column_Container = document.createElement("ul");
    // Add to main container
    CONTAINER.appendChild(column_Container);

    // Create 16 vertical squares per iteration
    for (let col = 0; col < 16; col++)
    {
        // Create list item for each square
        let list_Item = document.createElement("li");

        // Create square
        let square = document.createElement("div");
        // Set class
        square.classList.add("square");
        // Add square to list item
        list_Item.appendChild(square);

        // Add list item to column container
        column_Container.appendChild(list_Item);
    }
}
