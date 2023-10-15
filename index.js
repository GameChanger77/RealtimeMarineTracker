function fetchData(){
    fetch("./data.json")
.then(response=>response.json())
.then(data=>loadData(data));
}

function loadData(data){
    var tempContainer = document.getElementById("Temp");
    var humidityContainer = document.getElementById("Humidity");
    var waterContainer = document.getElementById("Water Level");
    console.log(data);

    let temp = data.temp;
    let humidity = data.humidity;
    let waterLevel = data.waterLevel;

    tempContainer.innerHTML = `${temp}`;

    humidityContainer.innerHTML = `${humidity}`;

    waterContainer.innerHTML = `${waterLevel}`;
}
