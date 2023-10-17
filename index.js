function fetchData() {
    fetch("./data.json")
        .then(response => response.json())
        .then(data => loadData(data));
}

let waterLevel = -1;

function loadData(data) {
    var tempContainer = document.getElementById("Temp");
    var humidityContainer = document.getElementById("Humidity");
    var waterContainer = document.getElementById("Water Level");
    var statusContainer = document.getElementById("status");
    console.log(data);

    let temp = data.temp;
    let humidity = data.humidity;
    waterLevel = data.waterLevel;

    tempContainer.innerHTML = `<p><strong>${temp}°F</strong><span class="label"><br>Temp.<span><p>`;

    humidityContainer.innerHTML = `<p><strong>${humidity}%</strong><span class="label"><br>Humidity<span><p>`;

    // waterContainer.innerHTML = `${waterLevel}<br>`;
    if (1.1159 * (waterLevel) - 353 < 25) {
        statusContainer.innerHTML = `Status: Nominal`;
    } else {
        statusContainer.innerHTML = `Status: WARNING!`;
        statusContainer.style.color = "red";
        statusContainer.style.fontSize = "40pt";
    }

    // statusContainer.innerHTML = `Status: ${1.1159 * (waterLevel) - 353 < 25 ? "Nominal" : "WARNING"}<br>`;
    move();
}

const elements = document.querySelectorAll(".circle-outline");
elements.forEach(element => {
    element.classList.add("circle-outline");
});

var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var myBar = document.getElementById("myBar");
        var height = 1;
        var id = setInterval(frame, 10);

        function frame() {
            height = 1.1159 * (waterLevel) - 353;
            console.log(height);
            if (height >= 0) {
                myBar.style.height = height + "%";
            }
            else {
                myBar.style.height = 0 + "%";
            }
        }
    }
}
