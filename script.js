// Reference container, button, and default and max loop iterations
const CONTAINER = document.getElementById("container");
const BUTTON = document.getElementById("selectable");
const DEFAULT_TIMES = 16;
const MAX_TIMES = 100;

// Add function to create grid
function create_Grid(times)
{
    // Loop depending on times
    for (let iteration = 0; iteration < times; iteration++)
    {
        // Create vertical square per iteration
        for (let col = 0; col < times; col++)
        {
            // Create square
            let square = document.createElement("div");
            // Set class
            square.classList.add("square");
            // Add square to list item
            CONTAINER.appendChild(square);

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
};

// Add function to remove grid
function remove_Grid()
{
    // Remove each child
    while (CONTAINER.firstChild)
    {
        CONTAINER.removeChild(CONTAINER.firstChild);
    }
};

// Create default grid
create_Grid(DEFAULT_TIMES);

// Add event listener function on button click
BUTTON.addEventListener('click', function()
{
    // Prompt for choice and store into variable
    let choice = prompt("Enter a new grid value");

    // Check if canceled
    if (choice == null || choice == '')
    {
        // Exit function
        return;
    }

    // Convert user input to number
    choice = Number(choice);

    // Verify limit
    if (choice <= MAX_TIMES)
    {
        // Remove current grid
        remove_Grid();

        // Generate new grid according to user input
        create_Grid(choice);
    }

    // Display error message
    else
    {
        alert('Limit is 100 x 100 squares.');
    }
});
