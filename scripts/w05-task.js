/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    // Clear previous temple display
    templesElement.innerHTML = '';

    // Process each temple
    temples.forEach(temple => {
        // Create HTML elements
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');

        // Set temple name to h3 element
        h3.textContent = temple.templeName;

        // Set image URL to img element
        img.src = temple.imageUrl;
        img.alt = temple.location;

        // Append elements
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        // Fetch temple data
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
        // Convert response to JSON
        const data = await response.json();
        // Assign data to templeList
        templeList = data;
        // Display temples
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};

getTemples();

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();

    const filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            displayTemples(temples);
    }
};

/* sortBy Function */
const sortBy = () => {
    const sortOption = document.getElementById('sortBy').value;

    switch (sortOption) {
        case 'name':
            templeList.sort((a, b) => a.templeName.localeCompare(b.templeName));
            break;
        case 'location':
            templeList.sort((a, b) => a.location.localeCompare(b.location));
            break;
        case 'dedicatedDate':
            templeList.sort((a, b) => new Date(a.dedicatedDate) - new Date(b.dedicatedDate));
            break;
        default:
            break;
    }

    // Re-display temples after sorting
    filterTemples(templeList);
};

/* Event Listener */
document.getElementById('filtered').addEventListener('change', () => {
    filterTemples(templeList);
});

document.getElementById('sortBy').addEventListener('change', () => {
    sortBy();
});
