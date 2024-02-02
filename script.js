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

        // Add event listener for mouseover for any square
        square.addEventListener('mouseover', function(e)
        {
            // Reference former background color
            old_Background_Color = e.target.style.backgroundColor;

            // Set background color to gray
            e.target.style.backgroundColor = 'gray';

            // Add event listener for mouseleave in this square
            e.target.addEventListener('mouseleave', function(e)
            {
                // Restore former background color
                e.target.style.backgroundColor = old_Background_Color;
            });
        });
    }
}
