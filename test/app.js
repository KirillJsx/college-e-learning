// Как всегда нулевой пример
// данные (имитируем API) - пример не полный, все данные в ТЗ
const servers = [
    {
        proto: "TCP",
        local: "192.168.1.5:443",
        remote: "10.0.0.1:80",
        state: "ESTABLISHED",
    },
];

// находим контейнер
const listContainer = document.querySelector("#conn-body");

// функция отрисовки через createElement
function renderTable(servers) {
    // очищаем контейнер
    listContainer.innerHTML = "";

    servers.forEach((server) => {

        const card = document.createElement("tr");
        // подсказка - это пример добавления класса, на уровне 2 потребуется другая реализация
        card.className = `server-card ${server.status}`; // или через classList.add

        const title = document.createElement("td");
        title.textContent = server.proto;

        const ipPara = document.createElement("td");
        ipPara.textContent = `IP: ${server.local}`;

        const statusSpan = document.createElement("td");
        statusSpan.textContent = `Status: ${server.remote}`;

        const state = document.createElement("td");
        state.textContent = `State: ${server.state}`;

        // вкладываем все элементы в карточку
        card.appendChild(title);
        card.appendChild(ipPara);
        card.appendChild(statusSpan);
        card.appendChild(state);

        // добавляем карточку в контейнер
        listContainer.appendChild(card);
    });
}

// запускаем при загрузке страницы
renderTable(servers);

// подсказка - вспомните прошлый урок с localStorage как мы реализовывали удаление (в тг посмотрите 4 уровень прошлой)