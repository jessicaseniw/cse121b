document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newTaskForm');
    const taskList = document.getElementById('taskList');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;

        // Substitua 'WEATHER_API_URL' pelo URL da API de previsão do tempo
        fetch('Whttps://openweathermap.org/api')
            .then(response => response.json())
            .then(data => {
                const temperature = data.main.temp;

                // Create a new li element for the task with temperature
                const newTask = document.createElement('li');
                newTask.innerHTML = `
                    <strong>${title}</strong>
                    <p>${description}</p>
                    <p>Date: ${date}</p>
                    <p>Current Temperature: ${temperature}°C</p>
                `;

                // Add the new task to the task list
                taskList.appendChild(newTask);

                // Clear the form fields
                form.reset();
            })
            .catch(error => {
                console.error('Error getting temperature:', error);
                // If there's an error getting the temperature, create the task without the temperature
                const newTask = document.createElement('li');
                newTask.innerHTML = `
                    <strong>${title}</strong>
                    <p>${description}</p>
                    <p>Date: ${date}</p>
                    <p>Current Temperature: Not available</p>
                `;
                taskList.appendChild(newTask);
                form.reset();
            });
    });
});
