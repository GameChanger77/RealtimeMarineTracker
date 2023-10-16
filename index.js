function fetchData(){
    fetch("./data.json")
.then(response=>response.json())
.then(data=>loadData(data));
}

let waterLevel = -1;

function loadData(data){
    var tempContainer = document.getElementById("Temp");
    var humidityContainer = document.getElementById("Humidity");
    var waterContainer = document.getElementById("Water Level");
    console.log(data);

    let temp = data.temp;
    let humidity = data.humidity;
    waterLevel = data.waterLevel;

    tempContainer.innerHTML = `${temp}<br>`;

    humidityContainer.innerHTML = `${humidity}<br>`;

    waterContainer.innerHTML = `${waterLevel}<br>`;
    move();
}

var i = 0;
function move() {
    console.log("yarr");
    if (i == 0) {
        i = 1;
        var myBar = document.getElementById("myBar");
        var height = 1;
        var id = setInterval(frame, 10);

        function frame() {
            height = 1.1159 * (waterLevel) - 353;
            console.log(height);
            if(height >= 0){
            myBar.style.height = height + "%";
            }
            else
            {
                myBar.style.height = 0 + "%"; 
            }
        }
    }
}
