$(document).ready(function() {
  $(".quiz").submit(function(event) {
    $(".result").hide();
    event.preventDefault();

    var color = $("select#color").val();
    console.log(color);

    var animal = $("select#animal").val();
    console.log(animal);

    var food = $("select#food").val();
    console.log(food);

    if (color === "1" && animal === "4" && food === "7") {
      $("#fabio").show();
    }

    else if (color === "2" && animal === "5" && food === "8") {
      $("#hulk").show();

    }
    else if (color === "3" && animal === "6" && food === "9") {
      $("#pam").show();

      console.log("#fabio");
    }



  });
});
