window.onload = function () {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"
  )
    .then(function (response) {
      return response.json();
    })

    .then(function (resultado) {
      //<----------- ESTO ES PARA LOS TRENDING ----------->
      console.log(resultado);
    })

    .catch(function (error) {
      console.log("Error: " + error);
    });

  // NO BORRAR
};
