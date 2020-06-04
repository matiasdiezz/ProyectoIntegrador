window.onload = function () {
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      var listaDeGeneros = document.querySelector("#listaDeGeneros");
      var contenidoDeGeneros = "";
      for (let i = 1; i < resultado.data.length; i++) {
        contenidoDeGeneros +=
          '<div class="card col-lg-2 col-sm-5 bg-light align-items-center m-3 border border-warning">';
        contenidoDeGeneros +=
          '<img class="card-img-top rounded mt-3 border border-warning" src="' +
          resultado.data[i].picture +
          '" alt="Card image"/>';
        contenidoDeGeneros +=
          '<div class="card-body">' +
          '<a href="Generos.html" class="btn btn-warning col-12">' +
          resultado.data[i].name +
          "</a>";
        contenidoDeGeneros += "</div> </div>";
      }
      listaDeGeneros.innerHTML = contenidoDeGeneros;
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
};
