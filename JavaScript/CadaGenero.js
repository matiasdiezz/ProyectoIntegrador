window.onload = function () {
  //Convierto una parte de la URL en un elemento
  var queryString = document.location.search.substring(0);
//Le metes el querystring 
  var queryStringObj = new URLSearchParams(queryString);
//Creas variable con lo que te trajo
  let idGeneros = queryStringObj.get("id");
//Hago un fetch y le agrego el ID de generos
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" +
      idGeneros +
      "/artists"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      //Traigo el div con ese id
      var listaDeGeneros = document.querySelector("#listaDeGeneros");
      var contenidoDeGeneros = "";

      //Trae los artistas de la API y los muestra y le agrega contenido
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
//Si hay erros lo muestra en consola
    .catch(function (error) {
      console.log("Error: " + error);
    });
};
