window.onload = function () {
  var queryString = document.location.search.substring(0);
  var queryStringObj = new URLSearchParams(queryString);

  let holacomoestas = queryStringObj.get("id");

  console.log(holacomoestas);
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" +
      holacomoestas
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      var CuerpoCancion = document.querySelector("#Canciones");
      var Canciones = "";
      // canción
      Canciones +=
        '<img src="' +
        resultado.album.cover_big +
        '" class="rounded img-fluid img-thumbnail bg-warning shadow-lg" style="width: 300px;" alt="Foto del album"/>';
      Canciones += '<div class="aling-items-center">';
      Canciones +=
        '<h1 class="text-light m-3 rounded">' + resultado.title + "</h1>";
      Canciones +=
        '<h3 type = "button" class="text-black m-3 bg-warning rounded">' +
        resultado.artist.name +
        "</h3>" +
        '<audio controls> < source src = "' +
        holacomoestas.link +
        '" type = "audio/mpeg" ></audio></div>"';
      console.log(resultado.preview);
      CuerpoCancion.innerHTML = Canciones;
    });
};
