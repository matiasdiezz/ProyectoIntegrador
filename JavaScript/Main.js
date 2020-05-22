window.onload = function () {
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function (response) {
      return response.json();
    })

    .then(function (resultado) {
      console.log(resultado);
    })

    .catch(function (error) {
      console.log("Error: " + error);
    });

  // NO BORRAR
};
