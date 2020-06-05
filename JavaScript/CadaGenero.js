window.onload = function () {
  var queryString = document.location.search.substring(0);
  var queryStringObj = new URLSearchParams(queryString);

  var holacomoestas = queryStringObj.get("id");

  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" +
      holacomoestas +
      "/artists"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      var listaDeGeneros = document.querySelector("#listaDeGeneros");
      var contenidoDeGeneros = "";
      for (let i = 0; i < resultado.data.length; i++) {
        contenidoDeGeneros +=
          '<div class="card col-lg-2 col-sm-5 bg-primary align-items-center m-3 border border-light">';
        contenidoDeGeneros +=
          '<img class="card-img-top rounded mt-3 border border-warning" src="' +
          resultado.data[i].picture_big +
          '" alt="Card image"/>';
        contenidoDeGeneros +=
          '<div class="card-body">' +
          '<a href="Artista.html?id=' +
          resultado.data[i].id +
          '" class="btn btn-dark col-12">' +
          resultado.data[i].name +
          "</a>";
        contenidoDeGeneros += "</div> </div>";
      }
      listaDeGeneros.innerHTML = contenidoDeGeneros;
      console.log(listaDeGeneros);
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
};
