var result; // jsonArray of upload file, use this to access the info
var MainInfo;// jsonArray of main file, use this to access the info
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
          result = JSON.parse(e.target.result);  //result contains the JSON array info
           appendJSONData(result, 'krustykrab.json')
        }
        
        fr.readAsText(files.item(0));
        result = MainInfo;

    });
});
/*
window.onload = function(){

    $.getJSON('MainInfo.json', function (data){
    console.log("KrustyKrab has been loaded");
    mainInfo = data; 
    console.log (mainInfo.sales[0]) 
  });// use data to use the JSON object
  
};
*/
function appendJSONData (newData, jsonFile){ //JSON Object newData, String jsonFile 
var js = require("fs");
  fs.readFile(jsonFile, 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    var ogJSON = JSON.parse(data); //now it an object
    $.extends(ogJSON, newData);
    json = JSON.stringify(ogJSON); //convert it back to json
    fs.writeFile(jsonFile, json, 'utf8', callback); // write it back 
    console.log("Appended")
}});

}