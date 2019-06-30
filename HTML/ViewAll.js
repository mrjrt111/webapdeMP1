var result;
var mainInfo;

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
          result = JSON.parse(e.target.result);  //result contains the JSON file info
        console.log(result)
        }
        
        fr.readAsText(files.item(0));
        

    });
});

window.onload = function(){
  $.getJSON('MainInfo.json', function (data){
    console.log("KrustyKrab has been loaded");
    mainInfo = data; 
    console.log (mainInfo.sales[0]) 
  });// use data to use the JSON object
  
};

function getTableData(){
    document.getElementById("tableView")
}


