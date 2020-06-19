// Playlist
window.onload = function () {
  //Recupero el repositorio local

  let recuperoStorage = localStorage.getItem("playlist");

  //Lo convierto en JSON

  let playlist = JSON.parse(recuperoStorage);

  //Selcciono la playlist en el HTML

  let miPlaylist = document.querySelector("#MiPlaylist");
  console.log(recuperoStorage);
  //Si la playlist no tiene canciones, te da un mensaje
  if (recuperoStorage == null || recuperoStorage == "[]") {
    playlist = [];
    miPlaylist.innerHTML +=
      "<tr><td> No hay canciones en tu playlist </td></tr>";
    console.log(miPlaylist);
    //Si lo tiene, te muestra todos los tracks
  } else {
    playlist.forEach(function (idTrack) {
      mostrarTrack(idTrack);
    });
  }
  //Traigo todas las canciones de la API con un fetch
  function mostrarTrack(idTrack) {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" +
        idTrack
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (respuesta) {
        //le agrego el HTMl a la playlist
        miPlaylist.innerHTML +=
          "<tr>" +
          '<td class="d-flex justify-content-between align-items-center">' +
          '<a href="Cancion.html?id=' +
          respuesta.id +
          '" class="text-light">' +
          respuesta.title +
          '</a><span class="badge badge-warning badge-pill" id="holas"><button type="button" class="btn">' +
          '<i class="fas fa-eraser" style="font-size: 20px;"></i></button></span></td>' +
          "</tr>";
      })

      //Si hay un error lo muestro en la consola
      .catch(function (errors) {
        console.log(errors);
      });
  }
};
