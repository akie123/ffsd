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
document.getElementById("a").addEventListener("click", function() {

    document.getElementById('cancel').style.display='none';
    document.getElementById('booking').style.display='none';
    document.getElementById('past-appointment').style.display='none';
    document.getElementById('info').style.display='none';
    document.getElementById('upcoming').style.display='block';

})
document.getElementById("b").addEventListener("click", function() {

    document.getElementById('cancel').style.display='none';
    document.getElementById('booking').style.display='none';
    document.getElementById('past-appointment').style.display='none';
    document.getElementById('info').style.display='block';
    document.getElementById('upcoming').style.display='none';

})
document.getElementById("d").addEventListener("click", function() {

    document.getElementById('past-appointment').style.display='none';
    document.getElementById('cancel').style.display='none';
    document.getElementById('upcoming').style.display='none';
    document.getElementById('info').style.display='none';
    document.getElementById('booking').style.display='block';

})
document.getElementById("e").addEventListener("click", function() {


    document.getElementById('upcoming').style.display='none';
    document.getElementById('booking').style.display='none';
    document.getElementById('past-appointment').style.display='none';
    document.getElementById('info').style.display='none';
    document.getElementById('cancel').style.display='block';
})
document.getElementById("f").addEventListener("click", function() {


    document.getElementById('upcoming').style.display='none';
    document.getElementById('booking').style.display='none';
    document.getElementById('cancel').style.display='none';
    document.getElementById('info').style.display='none';
    document.getElementById('past-appointment').style.display='block';

})