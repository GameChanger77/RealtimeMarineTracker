fetch("./data.json")
.then(response=>response.json())
.then(data=>loadData(data));

function loadData(data){
    var mainContainer = document.getElementById("data");
    console.log(data);

    let temp = data.temp;
    let humidity = data.humidity;

    mainContainer.innerHTML = `
    <h3>${temp}</h3><br>
    ${humidity}<br>
    `;

    // for (let i=0; i<myMovies.movies.length; i++){
    //     // let id = myMovies.movies[i].id;
    //     let title = myMovies.movies[i].title;
    //     let year = myMovies.movies[i].year;
    //     let url = myMovies.movies[i].url;

    //     console.log(title);

    //     // DOM
    //     let div = document.createElement("div");
    //     div.innerHTML = 

    //     mainContainer.appendChild(div);
    // }

}