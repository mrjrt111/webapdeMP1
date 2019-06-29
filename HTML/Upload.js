
$(document).ready(function(){

    $('input[type="file"]').change(function(){

        var files = document.getElementById('fileid').files;
        console.log(files);
        if (files.length <= 0) {
          return false;
        }
        
        var fr = new FileReader();
        
        fr.onload = function(e) { 
        console.log(e);
          var result = JSON.parse(e.target.result);
        }

    });
});

window.onload = function(){
  $.getJSON('krustykrab.json', function (data){console.log("KrustyKrab has been loaded")});
  
};