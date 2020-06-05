window.onload = function () {
  $(function () {
    $('[data-toggle="popover"]').popover();
  });
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
        '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=' +
        holacomoestas +
        '&app_id=1" width="300" height="300"></iframe>';
      console.log(resultado.preview);
      CuerpoCancion.innerHTML = Canciones;
    });
};
