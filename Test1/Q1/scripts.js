document.addEventListener('DOMContentLoaded', function () {
    var contentToFilterContainer = document.getElementById('contentToFilterContainer');
    var filterCaption = contentToFilterContainer.dataset.filtercaption || 'Search page';

    // Create label and input for filtering
    var label = document.createElement('label');
    label.setAttribute('for', 'filterText');
    label.textContent = filterCaption;

    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'filterText';
    input.className = 'content-filter';
    input.title = 'start typing here to filter content on the page';

    contentToFilterContainer.parentNode.insertBefore(label, contentToFilterContainer);
    contentToFilterContainer.parentNode.insertBefore(input, contentToFilterContainer);

    // Listen for input events to trigger filtering
    input.addEventListener('input', function () {
        var filterValue = input.value.toUpperCase();
        var items = contentToFilterContainer.children;

        Array.from(items).forEach(function (item) {
            var itemText = item.dataset.filter.toUpperCase();
            if (itemText.indexOf(filterValue) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Debounce function (optional for performance)
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


