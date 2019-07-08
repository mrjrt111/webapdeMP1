$(window).ready(function () {

    /*let bu
    for(let i = 0; i<MainInfo.sales.length;i++)
        MainInfo.sales[i] */
    
   

    Chart.defaults.global.defaultFontColor = 'black';
    Chart.defaults.global.defaultFontFamily = 'Roboto';
    $("#timeChartButton").click(loadTimeChart);
    $("#salesChartButton").click(loadSalesChart);
    $("#speciesChartButton").click(loadSpeciesChart);
    let timeChart, salesChart, speciesChart;
    function loadTimeChart(){
        let chart = document.getElementById('Chart').getContext('2d');
        destroyCharts();
        timeChart = new Chart(chart, {
            type: 'line',
            data: {
                labels: ['8:00', '9:00',
                    '10:00', '11:00',
                    '12:00', '13:00',
                    '14:00',],
                datasets: [{
                    label: 'Customers',
                    data: [
                        617594,
                        181045,
                        153060,
                        106519,
                        105162,
                        95072
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
