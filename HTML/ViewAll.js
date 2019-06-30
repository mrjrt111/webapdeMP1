var result;
var mainInfo;
var firstEntry;
var lastEntry;
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");
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
  firstEntry = 0;
  lastEntry = 9;
  $.getJSON('MainInfo.json', function (data){
    console.log("KrustyKrab has been loaded");
    mainInfo = data; 
    console.log (mainInfo.sales[0])
    
    getTableData(firstEntry, lastEntry);
  });// use data to use the JSON object
  
};

prevButton.addEventListener("click", prevList);
nextButton.addEventListener("click", nextList);

function prevList (){
  if (firstEntry!=0){
    firstEntry-=10;
    lastEntry-=10;
    getTableData(firstEntry, lastEntry);
  }
  
}

function nextList (){

  if ((mainInfo.sales.length-1)-lastEntry<10){
    firstEntry+=10;
    lastEntry = mainInfo.sales.length-1;
    getTableData(firstEntry, lastEntry)
  }

  else if (lastEntry!=mainInfo.sales.length){
    firstEntry+=10;
    lastEntry+=10;
    getTableData(firstEntry, lastEntry);
  }
  
}


function getTableData(first, last){
    var table = document.getElementById("tableView");
    var dateTime;
    table.innerHTML = "<tr><th>Time</th><th>Species</th><th>Burger</th></tr>";
    
    for (i=first; i</*mainInfo.sales.length*/last; i++){
      dateTime = new Date (mainInfo.sales[i].datetime);
      if (dateTime.getMinutes()>=10)
          table.innerHTML+= "<tr><th>"+dateTime.getHours()+":" + dateTime.getMinutes()+"</th> <th> "+mainInfo.sales[i].species+"</th> <th> "+mainInfo.sales[i].burger+"</th></tr>";
      else
      table.innerHTML+= "<tr><th>"+dateTime.getHours()+":0" + dateTime.getMinutes()+"</th> <th> "+mainInfo.sales[i].species+"</th> <th> "+mainInfo.sales[i].burger+"</th></tr>";

    }

}


