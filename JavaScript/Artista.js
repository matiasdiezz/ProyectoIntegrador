window.onload = function () {
  //Convierte una parte de la URL en un elemento
  var queryString = document.location.search.substring(0);
  var queryStringObj = new URLSearchParams(queryString);
  let holacomoestas = queryStringObj.get("id");
  //Cuerpo
  //Hago un fetch y le agrego el ID
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" +
    holacomoestas
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      var fotoAlbum = document.querySelector("#Foto");
      //Agrego el HTML a cada elemento
      fotoAlbum.innerHTML =
        '<img src="' +
        resultado.picture_big +
        '" class="img-thumbnail float-right" style="height: 200px;"/>';
      var cuerpoAlbum = document.querySelector("#Descripcion");
      var cosasAlbum = '<h1 class="m-3">' + resultado.name + "</h1>";
      cosasAlbum +=
        '<h5 class="m-3 bg-light rounded text-center" id="Contador""> Fans counter: ' +
        resultado.nb_fan +
        "</h5 >";
      cuerpoAlbum.innerHTML = cosasAlbum;
    });
  //lsita de canciones
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" +
      holacomoestas +
      "/top"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      var chartiano = document.querySelector("#chart");
      var chartt = "";
      for (let i = 0; i < resultado.data.length; i++) {
        const element = resultado.data[i];
        chartt +=
          '<td class="d-flex justify-content-between align-items-center">';
        chartt +=
          '<a href="Cancion.html?id=' +
          element.id +
          '" class="text-light" >' +
          element.title +
          "</a>";
        chartt +=
          '<span class="badge badge-primary badge-pill">' +
          element.duration +
          " segundos</span>" +
          " </td>";
        console.log(chartiano);
        chartiano.innerHTML = chartt;
      }
    });
  //chart
  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      // aca son los albumes
      var listaAlbumes = document.querySelector("#listaArtista");
      var contenidoAlbumes = "";
      for (let i = 0; i < resultado.artists.data.length; i++) {
        var albums1 = resultado.artists.data[i];
        contenidoAlbumes +=
          '<tr> <td class="d-flex justify-content-between align-items-center">';
        contenidoAlbumes +=
          '<a href="Artista.html?id=' +
          albums1.id +
          '" class="text-light" >' +
          albums1.name +
          "</a>";
        contenidoAlbumes +=
          '<span class="badge badge-primary badge-pill" >' +
          albums1.position +
          "</span>";
        contenidoAlbumes += "</td> </tr>";
      }
      listaAlbumes.innerHTML = contenidoAlbumes;
    });
};
