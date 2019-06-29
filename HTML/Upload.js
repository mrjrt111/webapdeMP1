
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

function appendJSONData (newData, jsonFile){ //JSON Object newData, String jsonFile 
  fs.readFile(jsonFile, 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    var ogJSON = JSON.parse(data); //now it an object
    var newJSONObj = Object.assign(ogJSON, newData) //add some data
    json = JSON.stringify(ogJSON); //convert it back to json
    fs.writeFile(jsonFile, json, 'utf8', callback); // write it back 
}});

}