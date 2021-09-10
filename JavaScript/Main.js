window.onload = function () {
  //Charts
  //Traemos la API de los charts
  fetch("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart")
    .then(function (response) {
      return response.json();
    })
    .then(function (resultado) {
      //Carrousel
      //Se busca "el mejor" de cada categoria y se agrega
      //Album
      document.querySelector("#fotoAlbum").innerHTML =
        '<div><img src="' +
        resultado.albums.data[0].cover_xl +
        '"class="d-block w-100 bg-danger p-3" alt="..."/></div><div class="carousel-caption"> <h3 class="font-weight-bold">El Mejor Album</h3> <p>' +
        resultado.albums.data[0].title +
        " es el 1" +
        "</p> </div>";
      //Artista
      document.querySelector("#fotoArtista").innerHTML =
        '<div><img src="' +
        resultado.artists.data[0].picture_xl +
        '"class="d-block w-100 bg-primary p-3" alt="..."/></div><div class="carousel-caption"> <h3 class="font-weight-bold">El Mejor Artista</h3> <p>' +
        resultado.artists.data[0].name +
        " es el 1" +
        "</p> </div>";
      //Track
      document.querySelector("#fotoTracks").innerHTML =
        '<div><img src="' +
        resultado.tracks.data[0].album.cover_xl +
        '"class="d-block w-100 bg-warning p-3" alt="..."/></div><div class="carousel-caption"> <h3 class="font-weight-bold">La mejor canción</h3> <p>' +
        resultado.tracks.data[0].title +
        " es el 1" +
        "</p> </div>";
      console.log(resultado);

      //Canciones
      //Creo el top 10 canciones
      //Selecciono el div y le agrego el contenido
      var listaCanciones = document.querySelector("#listaCanciones");
      var contenidoCanciones = "";
      for (let i = 0; i < resultado.tracks.data.length; i++) {
        var canciones1 = resultado.tracks.data[i];
        //Agrego HTML al chart
        contenidoCanciones +=
          '<tr> <td class="d-flex justify-content-between align-items-center">';
        contenidoCanciones +=
          //Agrego el id a la url para hacer display
          '<a href="Cancion.html?id=' +
          canciones1.id +
          '" class="text-light" >' +
          canciones1.title +
          "</a>";
        contenidoCanciones +=
          '<span class="badge badge-warning badge-pill" >' +
          canciones1.position +
          "</span>";
        contenidoCanciones += "</td> </tr>";
      }
      //Le inserto el HTML
      listaCanciones.innerHTML = contenidoCanciones;

      // Aca son los albumes
      //Lo mismo con los albums

      var listaAlbumes = document.querySelector("#listaAlbumes");
      var contenidoAlbumes = "";
      for (let i = 0; i < resultado.albums.data.length; i++) {
        var albums1 = resultado.albums.data[i];
        contenidoAlbumes +=
          '<tr> <td class="d-flex justify-content-between align-items-center">';
        contenidoAlbumes +=
          '<a href="Album.html?id=' +
          albums1.id +
          '" class="text-light" >' +
          albums1.title +
          "</a>";
        contenidoAlbumes +=
          '<span class="badge badge-danger badge-pill" >' +
          albums1.position +
          "</span>";
        contenidoAlbumes += "</td> </tr>";
      }
      listaAlbumes.innerHTML = contenidoAlbumes;
      // aca va el de artista
      //Lo mismo con artista AKA LIL PROGRAM$$$$$$
      var listaArtista = document.querySelector("#listaArtista");
      var contenidoArtista = "";
      for (let i = 0; i < resultado.artists.data.length; i++) {
        var artista1 = resultado.artists.data[i];
        contenidoArtista +=
          '<tr> <td class="d-flex justify-content-between align-items-center">';
        contenidoArtista +=
          '<a href="Artista.html?id=' +
          artista1.id +
          '" class="text-light" >' +
          artista1.name +
          "</a>";
        contenidoArtista +=
          '<span class="badge badge-primary badge-pill" >' +
          artista1.position +
          "</span>";
        contenidoArtista += "</td> </tr>";
      }

      listaArtista.innerHTML = contenidoArtista;
    })
    //Muestra si hay un error
    .catch(function (error) {
      console.log("Error: " + error);
    });
};
