window.onload = function () {
  var listaCanciones = document.querySelector("listaCanciones");
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(function (response) {
      return response.json();
    })

    .then(function (resultado) {
      console.log(resultado);
      for (let i = 0; i < resultado.tracks.data.length; i++) {}
    })

    .catch(function (error) {
      console.log("Error: " + error);
    });

  // NO BORRAR
};
