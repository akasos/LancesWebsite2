$(document).ready(function() {
  swapElements();

  function swapElements() {
    if (window.innerWidth <= 768) {
      const image1 = document.querySelector(".row-container3-1-1 .img-merch");
      const image2 = document.querySelector(".row-container3-2-2 .img-merch");
      $(".coffee-text1").after(image1);
      $(".coffee-text2").after(image2);

      $(".row-container3-1-1").remove();
      $(".row-container3-2-2").remove();
    }
  }

  // Javascript code that allows the google maps to work and connect to Locations html page so customers can find different store locations//

  function myMap() {
    var mapProp = {
      center: new google.maps.LatLng(51.508742, -0.12085),
      zoom: 5
    };
    var map = new google.maps.Map(
      document.getElementById("googleMap"),
      mapProp
    );
  }
});
