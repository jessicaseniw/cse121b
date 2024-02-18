document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('novaTarefaForm');
    const listaTarefas = document.getElementById('listaTarefas');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value;
        const data = document.getElementById('data').value;
        const localizacao = document.getElementById('localizacao').value;

        // Function to fetch weather forecast
        async function fetchWeather(location) {
            const apiKey = '5d7a574be290b819810371ce389ec5b7'; // Replace with your API key
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                const temperature = data.main.temp;
                return temperature; // Returns temperature in Celsius
            } catch (error) {
                console.error('Error fetching weather forecast:', error);
                return 'N/A'; // Returns N/A if there's an error
            }
        }

        // Get temperature for task location
        const temperature = await fetchWeather(localizacao);

        // Create a new li element for the task
        const novaTarefa = document.createElement('li');
        novaTarefa.innerHTML = `
            <strong>${titulo}</strong>
            <p>${descricao}</p>
            <p>Date: ${data}</p>
            <p>Location: ${localizacao}</p>
            <p>Temperature: ${temperature}°C</p>
        `;

        // Add the new task to the task list on the right side
        listaTarefas.appendChild(novaTarefa);

        // Clear form fields
        form.reset();
    });
});
