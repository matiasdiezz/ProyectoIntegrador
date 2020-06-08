// Playlist
window.onload = function () {
  let recuperoStorage = localStorage.getItem("playlist");
  let playlist = JSON.parse(recuperoStorage);

  let miPlaylist = document.querySelector("#MiPlaylist");
  console.log(recuperoStorage);
  if (recuperoStorage == null || recuperoStorage == "[]") {
    playlist = [];
    miPlaylist.innerHTML +=
      "<tr><td> No hay canciones en tu playlist </td></tr>";
    console.log(miPlaylist);
  } else {
    playlist.forEach(function (idTrack) {
      mostrarTrack(idTrack);
    });
  }

  function mostrarTrack(idTrack) {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" +
        idTrack
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (respuesta) {
        miPlaylist.innerHTML +=
          "<tr>" +
          '<td class="d-flex justify-content-between align-items-center">' +
          '<a href="Cancion.html?id=' +
          respuesta.id +
          '" class="text-light">' +
          respuesta.title +
          "</a></td>" +
          "</tr>";
      })
      .catch(function (errors) {
        console.log(errors);
      });
  }
};
