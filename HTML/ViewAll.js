var result;
var mainInfo;
var firstEntry;
var lastEntry;
var filteredData = [];
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");
var findDateButton = document.getElementById("findDateButton");
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
    
    getAllData();
  });// use data to use the JSON object
  
};

prevButton.addEventListener("click", prevList);
nextButton.addEventListener("click", nextList);
findDateButton.addEventListener("click", getDataByDay)


function prevList (){
  if (firstEntry!=0){
    firstEntry-=10;
    lastEntry-=10;
    getTableData(firstEntry, lastEntry);
  }
  
}

function nextList (){


  if (filteredData.length-1==lastEntry)
    alert("End of the line");
  else if ((filteredData.length-1)-lastEntry<10){
    firstEntry+=10;
    lastEntry = filteredData.length-1;
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
    
    for (i=first; i</*mainInfo.sales.length*/last+1; i++){
      dateTime = new Date (filteredData[i].datetime);
      if (dateTime.getMinutes()>=10)
          table.innerHTML+= "<tr><th>"+dateTime.getHours()+":" + dateTime.getMinutes()+"</th> <th> "+filteredData[i].species+"</th> <th> "+filteredData[i].burger+"</th></tr>";
      else
      table.innerHTML+= "<tr><th>"+dateTime.getHours()+":0" + dateTime.getMinutes()+"</th> <th> "+filteredData[i].species+"</th> <th> "+filteredData[i].burger+"</th></tr>";

    }

}

function getAllData (){
  firstEntry = 0;
  lastEntry = 9;
  filteredData = [];
  for (i = 0; i<mainInfo.sales.length; i++){

    filteredData.push(mainInfo.sales[i]);
  }

  getTableData(firstEntry, lastEntry);

}

function getDataByDay (){
  firstEntry = 0;
  lastEntry = 9;
    filteredData = [];
    var chosenDate = new Date ( document.getElementById("dateInput").value);
    for (i = 0; i<mainInfo.sales.length; i++){
      jsonDateTime = new Date (mainInfo.sales[i].datetime);
      if (chosenDate.getDate()==jsonDateTime.getDate()&&chosenDate.getMonth()==jsonDateTime.getMonth()&&chosenDate.getYear()==jsonDateTime.getYear())
      {
        filteredData.push(mainInfo.sales[i]);
      }

    }
    console.log(filteredData.length+ "Entries");
    getTableData(firstEntry, lastEntry);
}




