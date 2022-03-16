$(document).ready(function() {
   $("div").draggable();
});
$(document).ready(function() {
   $("#el1").draggable({axis:"x,y"});
});
$(document).ready(function(){
   $("#el1").resizable();
}); 
$(document).ready(function(){
   $("#sort1").sortable();
});