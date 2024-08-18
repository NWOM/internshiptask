document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('gridContainer');
    const addItemButton = document.getElementById('addItemButton');

    // Function to create a new grid item
    function createGridItem(content) {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.draggable = true; // Make item draggable
        item.textContent = content;

        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('drop', handleDrop);
        item.addEventListener('dragend', handleDragEnd);

        return item;
    }

    // Function to handle the drag start event
    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.target.classList.add('dragging');
    }

    // Function to handle the drag over event
    function handleDragOver(e) {
        e.preventDefault();
    }

    // Function to handle the drop event
    function handleDrop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const draggedItem = document.getElementById(id);
        const targetItem = e.target;

        if (targetItem && targetItem !== draggedItem && targetItem.classList.contains('grid-item')) {
            const targetRect = targetItem.getBoundingClientRect();
            const draggedRect = draggedItem.getBoundingClientRect();
            
            // Swap items based on their positions
            if (targetRect.top < draggedRect.top) {
                gridContainer.insertBefore(draggedItem, targetItem);
            } else {
                gridContainer.insertBefore(draggedItem, targetItem.nextSibling);
            }
        }
    }

    // Function to handle the drag end event
    function handleDragEnd(e) {
        e.target.classList.remove('dragging');
    }

    // Add a few initial items
    for (let i = 1; i <= 5; i++) {
        const item = createGridItem(`Item ${i}`);
        item.id = `item-${i}`; // Set unique ID for each item
        gridContainer.appendChild(item);
    }

    // Add event listener to the 'Add New Item' button
    addItemButton.addEventListener('click', () => {
        const itemCount = gridContainer.children.length + 1;
        const newItem = createGridItem(`Item ${itemCount}`);
        newItem.id = `item-${itemCount}`;
        gridContainer.appendChild(newItem);
    });
});
