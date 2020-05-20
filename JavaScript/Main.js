window.onload = function () {
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(function (response) {
      return response.json();
    })

    .then(function (resultado) {
      for (let i = 0; i < 1; i++) {
        let Nombre = resultado.tracks.data[i].title;

        document.querySelector("#NombreCancion").innerHTML = Nombre;
      }
    })

    .catch(function (error) {
      console.log("Error: " + error);
    });

  // NO BORRAR
};
