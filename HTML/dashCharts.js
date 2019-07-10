var firstEntry;
var lastEntry;
var filteredData = [];
var dateRange = document.getElementById("dateRange");
var monthName = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov",  "Dec."];

$(document).ready(function () {
    if(sessionStorage.getItem("data")!= null)
        mainInfo = JSON.parse(sessionStorage.getItem('data'));

    Chart.defaults.global.defaultFontColor = 'black';
    Chart.defaults.global.defaultFontFamily = 'Roboto';

    //console.log('filename: ' + fileName);
    let dateForm = document.getElementById("dateSearch");
    $("#timeChartButton").click(showDateInput);
    $("#salesChartButton").click(loadSalesChart);
    $("#speciesChartButton").click(loadSpeciesChart)
    $("#speciesGrubsChartButton").click(loadTypeSpeciesChart);
    let timeChart, salesChart, speciesChart;

    function showDateInput(){
        destroyCharts();
        dateForm.style.visibility = "visible";
        $("#findDateButton").click(loadTimeChart);
    }

    function hideDateInput(){
        dateForm.style.visibility = "hidden";
    }

    function loadTimeChart(){
        let hour8=0, hour9=0, hour10=0, hour11=0, hour12=0,
            hour13=0, hour14=0, hour15=0, hour16=0, hour17=0;

        let chosenDate = new Date (document.getElementById("dateInput").value);
        let salesFromDay = new Array()
        for (i = 0; i<mainInfo.sales.length; i++){
            let dateTime = new Date (mainInfo.sales[i].datetime);
            if (chosenDate.getDate()===dateTime.getDate()&&chosenDate.getMonth()===dateTime.getMonth()&&chosenDate.getFullYear()===dateTime.getFullYear()){
                salesFromDay.push(dateTime);
            }
        }
        console.log(salesFromDay[0].getHours());
        for (i=0;i<salesFromDay.length;i++){
            if(salesFromDay[i].getHours() === 8)
                hour8++;
            if(salesFromDay[i].getHours() === 9)
                hour9++;
            if(salesFromDay[i].getHours() === 10)
                hour10++;
            if(salesFromDay[i].getHours() === 11)
                hour11++;
            if(salesFromDay[i].getHours() === 12)
                hour12++;
            if(salesFromDay[i].getHours() === 13)
                hour13++;
            if(salesFromDay[i].getHours() === 14)
                hour14++;
            if(salesFromDay[i].getHours() === 15)
                hour15++;
            if(salesFromDay[i].getHours() === 16)
                hour16++;
            if(salesFromDay[i].getHours() === 17)
                hour17++;        
        }

        let chart = document.getElementById('Chart').getContext('2d');
        destroyCharts();
        timeChart = new Chart(chart, {
            type: 'line',
            data: {
                labels: ['08:00', '09:00', '10:00', '11:00', '12:00',
                         '13:00', '14:00', '15:00', '16:00', '17:00'
                        ], 
                datasets: [{
                    label: 'Customers',
                    data: [
                        hour8, hour9, hour10, hour11, hour12,
                        hour13, hour14, hour15, hour16, hour17
                    ],
                    //backgroundColor:'green',
                    backgroundColor: [

                    ],
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 1,
                    hoverBorderColor: 'white'
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Customers Served Over Time',
                    fontSize: 25,
                },
                legend: {
                    display: true,
                    position: 'right',
                    labels: {}
                },
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        bottom: 10,
                        top: 10
                    },

                },
                tooltips: {
                    enabled: true
                },
                scales:{
                    xAxes:{

                    },
                    yAxes:[{
                        ticks:{
                            min:0
                        }
                    }]
                }
            }
        });
    }

    function loadSalesChart() {
        hideDateInput();
        let totalSales = new Array();
        totalSales.push(mainInfo.burger_sales[ 'Krusty Combo' ], mainInfo.burger_sales[ 'Krusty Deluxe' ],mainInfo.burger_sales['Krabby Pattie']);
        let chart = document.getElementById('Chart').getContext('2d');
        destroyCharts();
        salesChart = new Chart(chart, {
            type: 'bar',
            data: {
                labels: ['Krusty Combo', 'Krusty Deluxe',
                    'Krabby Pattie',],
                datasets: [{
                    label: 'Total sold',
                    data: totalSales,
                    //backgroundColor:'green',
                    backgroundColor: [
                        'rgba(150, 9, 56, 0.6)',
                        'whitesmoke',
                        'rgba(64,134,182,0.6)'
                    ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderColor:'black',
                    hoverBorderWidth: 1,
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Total Grubs Sold',
                    fontSize: 25,
                },
                legend:{
                  display:false
                },
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        bottom: 10,
                        top: 10
                    },
                },
                tooltips: {
                    enabled: true
                },
                scales:{
                    xAxes:{

                    },
                    yAxes:[{
                        ticks:{
                            min:0
                        }
                    }]
                }
            }
        });
    }

    function loadTypeSpeciesChart() {
        hideDateInput();
        let krustyCombo = new Array();
        krustyCombo.push(mainInfo.burger_by_species["Krusty Combo"]['leatherback turtle']);
        krustyCombo.push(mainInfo.burger_by_species["Krusty Combo"]['salmon']);
        krustyCombo.push(mainInfo.burger_by_species["Krusty Combo"]['seahorse']);
        krustyCombo.push(mainInfo.burger_by_species["Krusty Combo"]['coral']);
        krustyCombo.push(mainInfo.burger_by_species["Krusty Combo"]['giant clam']);
        krustyCombo.push(mainInfo.burger_by_species["Krusty Combo"]['gray whale']);
        krustyCombo.push(mainInfo.burger_by_species["Krusty Combo"]['sea lion']);

        let krustyDeluxe = new Array();
        krustyDeluxe.push(mainInfo.burger_by_species["Krusty Deluxe"]['leatherback turtle']);
        krustyDeluxe.push(mainInfo.burger_by_species["Krusty Deluxe"]['salmon']);
        krustyDeluxe.push(mainInfo.burger_by_species["Krusty Deluxe"]['seahorse']);
        krustyDeluxe.push(mainInfo.burger_by_species["Krusty Deluxe"]['coral']);
        krustyDeluxe.push(mainInfo.burger_by_species["Krusty Deluxe"]['giant clam']);
        krustyDeluxe.push(mainInfo.burger_by_species["Krusty Deluxe"]['gray whale']);
        krustyDeluxe.push(mainInfo.burger_by_species["Krusty Deluxe"]['sea lion']);

        let krabbyPattie = new Array();
        krabbyPattie.push(mainInfo.burger_by_species["Krabby Pattie"]['leatherback turtle']);
        krabbyPattie.push(mainInfo.burger_by_species["Krabby Pattie"]['salmon']);
        krabbyPattie.push(mainInfo.burger_by_species["Krabby Pattie"]['seahorse']);
        krabbyPattie.push(mainInfo.burger_by_species["Krabby Pattie"]['coral']);
        krabbyPattie.push(mainInfo.burger_by_species["Krabby Pattie"]['giant clam']);
        krabbyPattie.push(mainInfo.burger_by_species["Krabby Pattie"]['gray whale']);
        krabbyPattie.push(mainInfo.burger_by_species["Krabby Pattie"]['sea lion']);

        let chart = document.getElementById('Chart').getContext('2d');
        destroyCharts();
        speciesChart = new Chart(chart, {
            type: 'bar',
            data: {
                labels: ['leatherback turtle', 'salmon',
                    "seahorse", "coral",
                    'giant clam', 'gray whale',
                    'sea lion'],
                datasets: [{
                    label: 'Krusty Combo',
                    data: krustyCombo,
                    //backgroundColor:'green',
                    backgroundColor: 'rgba(150, 9, 56, 0.6)',
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 1,
                    hoverBorderColor: 'black'
                }, {
                    label: 'Krusty Deluxe',
                    data: krustyDeluxe,
                    //backgroundColor:'green',
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 1,
                    hoverBorderColor: 'black'
                }, {
                    label: 'Krabby Pattie',
                    data: krabbyPattie,
                    //backgroundColor:'green',
                    backgroundColor: 'rgba(64,134,182,0.6)',
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 1,
                    hoverBorderColor: 'black'
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Sales for Each Burger per Species',
                    fontSize: 25,
                },
                legend: {
                    display: true,
                    position: 'right',
                    labels: {}
                },
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        bottom: 10,
                        top: 10
                    },

                },
                tooltips: {
                    enabled: true
                }
            }
        });


    }

    function loadSpeciesChart() {
        hideDateInput();
        let speciesSales = new Array();
        speciesSales.push(mainInfo.species_sales['leatherback turtle']);
        speciesSales.push(mainInfo.species_sales['salmon']);
        speciesSales.push(mainInfo.species_sales['seahorse']);
        speciesSales.push(mainInfo.species_sales['coral']);
        speciesSales.push(mainInfo.species_sales['giant clam']);
        speciesSales.push(mainInfo.species_sales['gray whale']);
        speciesSales.push(mainInfo.species_sales['sea lion']);


        let chart = document.getElementById('Chart').getContext('2d');
        destroyCharts();
        speciesChart = new Chart(chart, {
            type: 'bar',
            data: {
                labels: ['leatherback turtle', 'salmon',
                    "seahorse", "coral",
                    'giant clam', 'gray whale',
                    'sea lion'],
                datasets: [{
                    label: 'Total Sold',
                    data: speciesSales,
                    //backgroundColor:'green',
                    backgroundColor: 'rgba(150, 9, 56, 0.6)',
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 1,
                    hoverBorderColor: 'black'
                } ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Total Burger Sales per Species',
                    fontSize: 25,
                },
                legend: {
                    display: true,
                    position: 'right',
                    labels: {}
                },
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        bottom: 10,
                        top: 10
                    },

                },
                tooltips: {
                    enabled: true
                }
            }
        });
    }

    function destroyCharts(){
        if(timeChart!=null)
            timeChart.destroy();
        if(salesChart!=null)
            salesChart.destroy();
        if(speciesChart!=null)
            speciesChart.destroy();
    }

    function getDataByDay (){
        filteredData = [];
        var chosenDate = new Date ( document.getElementById("dateInput").value);
        for (i = 0; i<mainInfo.sales.length; i++){
            jsonDateTime = new Date (mainInfo.sales[i].datetime);
            if (chosenDate.getDate()==jsonDateTime.getDate()&&chosenDate.getMonth()==jsonDateTime.getMonth()&&chosenDate.getFullYear()==jsonDateTime.getFullYear()){
              filteredData.push(mainInfo.sales[i]);
            }
      
        }
        console.log(filteredData.length + "Entries");
        dateRange.innerHTML = monthName[jsonDateTime.getMonth()]+" " + chosenDate.getDate()+ ", "+ chosenDate.getFullYear();
    }
  
});
