$(document).ready(function(){
  $("#Input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
$(document).ready(function(){
    $("#Input3").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable3 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
$(document).ready(function(){
    $("#Input2").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable2 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
$(document).ready(function(){
    $("#Input1").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable1 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
document.getElementById("strip").addEventListener("click", function() {


    let check = document.getElementById("elements").style.display;
    if (check == "none") {
        document.getElementById("elements").style.display = "block";


    } else {
        document.getElementById("elements").style.display = "none";

    }


})
