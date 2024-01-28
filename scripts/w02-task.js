/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Jéssica Seniw';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/me.jpg';

/* Step 3 - Element Variables */
const nameElement = document.querySelector('#name');
const foodElement = document.querySelector('#food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.textContent = fullName;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}. She is a student at BYU-Idaho.`);

/* Step 5 - Array */
let favfoods = ["Cuscuz", "Pizza", "Hamburguer", "Strogonoff"];

// Render the initial array
foodElement.innerHTML = favfoods.join(', ');

// Declare and instantiate a new favorite food
let newFood = 'Ice Cream';

// Add the new favorite food to the array
favfoods.push(newFood);

// Render the new array
foodElement.innerHTML += `<br>${favfoods.join(', ')}`;

// Remove the first element from the array
favfoods.shift();

// Render the updated array after removing the first element
foodElement.innerHTML += `<br>${favfoods.join(', ')}`;

// Remove the last element from the array
favfoods.pop();

// Render the updated array after removing the last element
foodElement.innerHTML += `<br>${favfoods.join(', ')}`;
