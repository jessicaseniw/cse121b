document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('novaTarefaForm');
    const listaTarefas = document.getElementById('listaTarefas');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value;
        const data = document.getElementById('data').value;
        const localizacao = document.getElementById('localizacao').value;

        // Função para buscar a previsão do tempo
        async function fetchWeather(location) {
            const apiKey = '5d7a574be290b819810371ce389ec5b7'; // Substitua pela sua chave da API
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                const temperature = data.main.temp;
                return temperature; // Retorna a temperatura em Celsius
            } catch (error) {
                console.error('Erro ao buscar a previsão do tempo:', error);
                return 'N/A'; // Retorna N/A se houver erro
            }
        }

        // Obter a temperatura para a localização da tarefa
        const temperature = await fetchWeather(localizacao);

        // Criar um novo elemento li para a tarefa
        const novaTarefa = document.createElement('li');
        novaTarefa.innerHTML = `
            <strong>${titulo}</strong>
            <p>${descricao}</p>
            <p>Data: ${data}</p>
            <p>Localização: ${localizacao}</p>
            <p>Temperatura: ${temperature}°C</p>
        `;

        // Adicionar a nova tarefa à lista de tarefas do lado direito
        listaTarefas.appendChild(novaTarefa);

        // Limpar os campos do formulário
        form.reset();
    });
});
