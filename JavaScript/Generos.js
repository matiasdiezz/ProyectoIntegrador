window.onload = function () {
  //Traemos la API de los generos con un fetch
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      //Generos
      //Creo todos los generos
      var listaDeGeneros = document.querySelector("#listaDeGeneros");
      var contenidoDeGeneros = "";
      //Arrancamos desde el 1 para que no traiga todos los generos
      for (let i = 1; i < resultado.data.length; i++) {
        //A cada genero agrego HTML
        contenidoDeGeneros +=
          '<div class="card col-lg-2 col-sm-5 bg-light align-items-center m-3 border border-warning">';
        contenidoDeGeneros +=
          '<img class="card-img-top rounded mt-3 border border-warning" src="' +
          resultado.data[i].picture +
          '" alt="Card image"/>';
        contenidoDeGeneros +=
          '<div class="card-body">' +
          //al href le agrego el id para agregarlo a la url
          '<a href="DentroDelGenero.html?id=' +
          resultado.data[i].id +
          '" class="btn btn-warning col-12">' +
          resultado.data[i].name +
          "</a>";
        contenidoDeGeneros += "</div> </div>";
      }
      listaDeGeneros.innerHTML = contenidoDeGeneros;
      //Lo inserto con innerHTML
    })
    //Si hay erros lo muestra en consola
    .catch(function (error) {
      console.log("Error: " + error);
    });
};
