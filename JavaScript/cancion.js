window.onload = function () {
  $(function () {
    //Aparecen los pops over
    $('[data-toggle="popover"]').popover();
  });
  //Convierto una parte de la URL a un elemento llamado idTrack
  var queryString = document.location.search.substring(0);

  var queryStringObj = new URLSearchParams(queryString);

  let idTrack = queryStringObj.get("id");

  console.log(idTrack);

  //Hago un fetch y le agrego el ID

  fetch(
    "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/" +
      idTrack
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      console.log(resultado);
      var CuerpoCancion = document.querySelector("#Canciones");
      var Canciones =
        '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=' +
        idTrack +
        '&app_id=1" width="300" height="300" class="bg-warning p-3 rounded"></iframe>';
      console.log(resultado.preview);
      CuerpoCancion.innerHTML = Canciones;
    });

  //recuperar datos del storage

  let BuscarPlaylist = localStorage.getItem("playlist");

  //Si todavía no tengo tracks en mi playlist
  if (BuscarPlaylist == null || BuscarPlaylist == "[]") {
    //Creo una lista vacía
    playlist = [];
  } else {
    //Recupero el array de localStorage
    playlist = JSON.parse(BuscarPlaylist);
  }

  //Me fijo que no esté en la lista y cambio el texto del botón
  if (playlist.includes(idTrack)) {
    document.querySelector("#BotonAgregar").innerHTML =
      '<button type = "button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Uh! Que bajon que la sacaste compa">' +
      '<i class="fas fa-eraser" style="font-size: 35px;"></i>' +
      "Borrar de la playlist" +
      "</button>";
  }

  // agregar un track a la playlist.
  let agregar = document.querySelector("#BotonAgregar");

  agregar.addEventListener("click", function (e) {
    //Detener el comportamiento default de <a></a>
    e.preventDefault();

    if (playlist.includes(idTrack)) {
      //Si el track está tenemos que quitarlo.
      let indiceEnElArray = playlist.indexOf(idTrack);
      playlist.splice(indiceEnElArray, 1);
      document.querySelector("#BotonAgregar").innerHTML =
        '<button type = "button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Kinga, ya esta en tu playlist este temon!">' +
        '<i class="fab fa-creative-commons-sampling-plus" style = "font-size: 35px;"></i >' +
        "Agregar a playlist" +
        "</button>";
      console.log(playlist);
    } else {
      //Agrego el id del track a la lista
      playlist.push(idTrack);
      document.querySelector("#BotonAgregar").innerHTML =
        '<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Uh! Que bajon que la sacaste compa">' +
        '<i class="fas fa-eraser" style="font-size: 35px;"></i>' +
        "Borrar de la playlist" +
        "</button>";
    }

    //guardar lista en localStorage
    let playlistParaStorage = JSON.stringify(playlist);
    localStorage.setItem("playlist", playlistParaStorage);
    console.log(localStorage);
  });
};
