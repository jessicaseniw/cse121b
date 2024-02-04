// Declare a new object literal variable named myProfile to hold information about yourself and assign an empty object to the variable.
let myProfile = {
    name: "Jessica Seniw",
    photo: {
      src: "images/me.jpg",
      alt: "Profile Picture"
    },
    favoriteFoods: ["Cuscuz", "Pizza", "Hamburguer", "Strogonoff"],
    hobbies: ["Listening to music", "Traveling", "Coding"],
    placesLived: []
  };
  
  // Add additional object literals with appropriate values to the placesLived array for each place you have lived.
  myProfile.placesLived.push(
    {
      place: 'João Pessoa, Brazil',
      length: '19 months'
    }
  );
  
  // DOM Manipulation (Output)
  
  // Assign the value of the name property to the HTML element with an ID of name.
  document.getElementById("name").textContent = myProfile.name;
  
  // Assign the value of the photo property as the src attribute of the HTML <img> with an ID of photo.
  document.getElementById("photo").src = myProfile.photo.src;
  
  // Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo.
  document.getElementById("photo").alt = myProfile.photo.alt;
  
  // For each favorite food in the favoriteFoods property,
  myProfile.favoriteFoods.forEach(food => {
    // create an HTML <li> element
    let li = document.createElement("li");
    // place the value of the favoriteFoods array element into the textContent of this new li element
    li.textContent = food;
    // append this new <li> element with content as a child of the HTML <ul> element with an ID of favorite-foods
    document.getElementById("favorite-foods").appendChild(li);
  });
  
  // Repeat the previous process of creating a list of items for each hobby in the hobbies property of the object
  myProfile.hobbies.forEach(hobby => {
    // create an HTML <li> element
    let li = document.createElement("li");
    // place the value of the hobbies array element into the textContent of this new li element
    li.textContent = hobby;
    // append this new <li> element with content as a child of the HTML <ul> element with an ID of hobbies
    document.getElementById("hobbies").appendChild(li);
  });
  
  // For each object in the placesLived property:
  myProfile.placesLived.forEach(place => {
    // Create an HTML <dt> element and put its place property in the <dt> element.
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    // Create an HTML <dd> element and put its length property in the <dd> element.
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    // Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived.
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
  });
  