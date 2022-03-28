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

function upcoming(){
        document.getElementById('upcoming').style.display = 'inline-block';
        document.getElementById('info').style.display = 'none';
        document.getElementById('mess').style.display = 'none';
        document.getElementById('cancel').style.display = 'none';
        document.getElementById('pasp').style.display = 'none';
        document.getElementById('schmana').style.display = 'none';
}


function info(){
        document.getElementById('upcoming').style.display = 'none';
        document.getElementById('info').style.display = 'inline-block';
        document.getElementById('mess').style.display = 'none';
        document.getElementById('cancel').style.display = 'none';
        document.getElementById('pasp').style.display = 'none';
        document.getElementById('schmana').style.display = 'none';
}

function messages(){
        document.getElementById('upcoming').style.display = 'none';
        document.getElementById('info').style.display = 'none';
        document.getElementById('mess').style.display = 'inline-block';
        document.getElementById('cancel').style.display = 'none';
        document.getElementById('pasp').style.display = 'none';
        document.getElementById('schmana').style.display = 'none';
}

function pastapp(){
        document.getElementById('upcoming').style.display = 'none';
        document.getElementById('info').style.display = 'none';
        document.getElementById('mess').style.display = 'none';
        document.getElementById('cancel').style.display = 'none';
        document.getElementById('pasp').style.display = 'inline-block';
        document.getElementById('schmana').style.display = 'none';
}

function cancel(){
        document.getElementById('upcoming').style.display = 'none';
        document.getElementById('info').style.display = 'none';
        document.getElementById('mess').style.display = 'none';
        document.getElementById('cancel').style.display = 'inline-block';
        document.getElementById('pasp').style.display = 'none';
        document.getElementById('schmana').style.display = 'none';
}

function schedulemanager(){
        document.getElementById('upcoming').style.display = 'none';
        document.getElementById('info').style.display = 'none';
        document.getElementById('mess').style.display = 'none';
        document.getElementById('cancel').style.display = 'none';
        document.getElementById('pasp').style.display = 'none';
        document.getElementById('schmana').style.display = 'inline-block';
}
