$(document).ready(function () {   
    Chart.defaults.global.defaultFontColor = 'black';
    Chart.defaults.global.defaultFontFamily = 'Roboto';

    //console.log('filename: ' + fileName);

    $("#timeChartButton").click(loadTimeChart);
    $("#salesChartButton").click(loadSalesChart);
    $("#speciesChartButton").click(loadSpeciesChart);
    let timeChart, salesChart, speciesChart;

    function loadTimeChart(){
        let datetime = new Array();
        let time = new Array();
        let hour8=0, hour9=0, hour10=0, hour11=0, hour12=0,
            hour13=0, hour14=0, hour15=0, hour16=0, hour17=0;

        for(let i=0; i<mainInfo.sales.length; i++)
            datetime.push(mainInfo.sales[Object.keys(mainInfo.sales)[i]].datetime);
        //console.log(time[0].datetime);
        //console.log(datetime[0]);
        //console.log(datetime.length);
        for (let i=0; i<datetime.length; i++){
            let string = datetime[i];
            let result = string.split(" ");
            //console.log(result[1]);
            //time.push(result[1]);

            if(Date.parse('1/1/1999 ' + result[1]) >= Date.parse('1/1/1999 ' + '08:00:00') && 
                Date.parse('1/1/1999 ' + result[1]) < Date.parse('1/1/1999 ' + '09:00:00'))
                hour8++;
            else if(Date.parse('1/1/1999 ' + result[1]) >= Date.parse('1/1/1999 ' + '09:00:00') && 
                    Date.parse('1/1/1999 ' + result[1]) < Date.parse('1/1/1999 ' + '10:00:00'))
                hour9++;
            else if(Date.parse('1/1/1999 ' + result[1]) >= Date.parse('1/1/1999 ' + '10:00:00') && 
                    Date.parse('1/1/1999 ' + result[1]) < Date.parse('1/1/1999 ' + '11:00:00'))
                hour10++;
            else if(Date.parse('1/1/1999 ' + result[1]) >= Date.parse('1/1/1999 ' + '11:00:00') && 
                    Date.parse('1/1/1999 ' + result[1]) < Date.parse('1/1/1999 ' + '12:00:00'))
                hour11++;
            else if(Date.parse('1/1/1999 ' + result[1]) >= Date.parse('1/1/1999 ' + '12:00:00') && 
                    Date.parse('1/1/1999 ' + result[1]) < Date.parse('1/1/1999 ' + '13:00:00'))
                hour12++;
            else if(Date.parse('1/1/1999 ' + result[1]) >= Date.parse('1/1/1999 ' + '13:00:00') && 
                    Date.parse('1/1/1999 ' + result[1]) < Date.parse('1/1/1999 ' + '14:00:00'))
                hour13++;
            else if(Date.parse('1/1/1999 ' + result[1]) >= Date.parse('1/1/1999 ' + '14:00:00') && 
                    Date.parse('1/1/1999 ' + result[1]) < Date.parse('1/1/1999 ' + '15:00:00'))
                hour14++;
            else if(Date.parse('1/1/1999 ' + result[1]) >= Date.parse('1/1/1999 ' + '15:00:00') && 
                    Date.parse('1/1/1999 ' + result[1]) < Date.parse('1/1/1999 ' + '16:00:00'))
                hour15++;
            else if(Date.parse('1/1/1999 ' + result[1]) >= Date.parse('1/1/1999 ' + '16:00:00') && 
                    Date.parse('1/1/1999 ' + result[1]) < Date.parse('1/1/1999 ' + '17:00:00'))
                hour16++;
            else if(Date.parse('1/1/1999 ' + result[1]) >= Date.parse('1/1/1999 ' + '17:00:00') && 
                    Date.parse('1/1/1999 ' + result[1]) < Date.parse('1/1/1999 ' + '18:00:00'))
                hour17++;
        }
        console.log(hour8);
        console.log(hour9);
        console.log(hour10);

        
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
            }
        });
    }

    function loadSalesChart() {
        let totalSales = new Array();
        totalSales.push(mainInfo.burger_sales[[ 'Krusty Combo' ]]);
        totalSales.push(mainInfo.burger_sales[[ 'Krusty Deluxe' ]]);
        totalSales.push(mainInfo.burger_sales[[ 'Krabby Pattie' ]]);

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

    function loadSpeciesChart(){
        let krustyCombo = new Array();
        krustyCombo.push(mainInfo.burger_by_species["Krusty Combo"][ 'leatherback turtle' ]);
        krustyCombo.push(mainInfo.burger_by_species["Krusty Combo"][ 'salmon' ]);
        krustyCombo.push(mainInfo.burger_by_species["Krusty Combo"][ 'seahorse' ]);
        krustyCombo.push(mainInfo.burger_by_species["Krusty Combo"][ 'coral' ]);
        krustyCombo.push(mainInfo.burger_by_species["Krusty Combo"][ 'giant clam' ]);
        krustyCombo.push(mainInfo.burger_by_species["Krusty Combo"][ 'gray whale' ]);
        krustyCombo.push(mainInfo.burger_by_species["Krusty Combo"][ 'sea lion' ]);

        let krustyDeluxe = new Array();
        krustyDeluxe.push(mainInfo.burger_by_species["Krusty Deluxe"][ 'leatherback turtle' ]);
        krustyDeluxe.push(mainInfo.burger_by_species["Krusty Deluxe"][ 'salmon' ]);
        krustyDeluxe.push(mainInfo.burger_by_species["Krusty Deluxe"][ 'seahorse' ]);
        krustyDeluxe.push(mainInfo.burger_by_species["Krusty Deluxe"][ 'coral' ]);
        krustyDeluxe.push(mainInfo.burger_by_species["Krusty Deluxe"][ 'giant clam' ]);
        krustyDeluxe.push(mainInfo.burger_by_species["Krusty Deluxe"][ 'gray whale' ]);
        krustyDeluxe.push(mainInfo.burger_by_species["Krusty Deluxe"][ 'sea lion' ]);

        let krabbyPattie = new Array();
        krabbyPattie.push(mainInfo.burger_by_species["Krabby Pattie"][ 'leatherback turtle' ]);
        krabbyPattie.push(mainInfo.burger_by_species["Krabby Pattie"][ 'salmon' ]);
        krabbyPattie.push(mainInfo.burger_by_species["Krabby Pattie"][ 'seahorse' ]);
        krabbyPattie.push(mainInfo.burger_by_species["Krabby Pattie"][ 'coral' ]);
        krabbyPattie.push(mainInfo.burger_by_species["Krabby Pattie"][ 'giant clam' ]);
        krabbyPattie.push(mainInfo.burger_by_species["Krabby Pattie"][ 'gray whale' ]);
        krabbyPattie.push(mainInfo.burger_by_species["Krabby Pattie"][ 'sea lion' ]);

        let chart = document.getElementById('Chart').getContext('2d');
        destroyCharts();
        speciesChart = new Chart(chart, {
            type: 'bar',
            data: {
                labels: [ 'leatherback turtle', 'salmon',
                    "seahorse", "coral",
                    'giant clam', 'gray whale',
                    'sea lion'],
                datasets: [{
                    label: 'Krusty Combo',
                    data: krustyCombo,
                    //backgroundColor:'green',
                    backgroundColor:  'rgba(150, 9, 56, 0.6)',
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 1,
                    hoverBorderColor: 'black'
                },{
                    label: 'Krusty Deluxe',
                    data:krustyDeluxe,
                    //backgroundColor:'green',
                    backgroundColor:  'rgba(255,255,255,0.6)',
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 1,
                    hoverBorderColor: 'black'
                },{
                    label: 'Krabby Pattie',
                    data: krabbyPattie,
                    //backgroundColor:'green',
                    backgroundColor:  'rgba(64,134,182,0.6)',
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
    function destroyCharts(){
        if(timeChart!=null)
            timeChart.destroy();
        if(salesChart!=null)
            salesChart.destroy();
        if(speciesChart!=null)
            speciesChart.destroy();
    }
});
