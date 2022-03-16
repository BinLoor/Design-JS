$(document).ready(function() {
   $("div").draggable();
});
$(document).ready(function() {
   $("#drag1").draggable({axis:"x"});
   $("#drag2").draggable({axis:"y"});
});