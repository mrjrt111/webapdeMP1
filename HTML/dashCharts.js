$(document).ready(function () {

    Chart.defaults.global.defaultFontColor = 'black';
    Chart.defaults.global.defaultFontFamily = 'Roboto';

    $("#timeChartButton").click(loadTimeChart);
    $("#salesChartButton").click(loadSalesChart);
    $("#speciesChartButton").click(loadSpeciesChart);

    function loadTimeChart(){
        let chart = document.getElementById('Chart').getContext('2d');
        let testChart = new Chart(chart, {
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
                scales:{
                    xAxes:{

                    }
                }
            }
        });
    }

    function loadSalesChart() {
        let chart = document.getElementById('Chart').getContext('2d');
        let testChart = new Chart(chart, {
            type: 'bar',
            data: {
                labels: ['Krusty Combo', 'Krusty Deluxe',
                    'Krabby Pattie',],
                datasets: [{
                    label: 'Number sold',
                    data: [
                        230,
                        369,
                        901
                    ],
                    //backgroundColor:'green',
                    backgroundColor: [
                        'rgba(150, 9, 56, 0.6)',
                        'whitesmoke',
                        'rgba(64,134,182,0.6)'
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
                    text: 'Total Grubs Sold',
                    fontSize: 25,
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
        let chart = document.getElementById('Chart').getContext('2d');
        let testChart = new Chart(chart, {
            type: 'pie',
            data: {
                labels: [ 'leatherback turtle', 'salmon',
                    "seahorse", "coral",
                    'giant clam', 'gray whale',
                    'sea lion'],
                datasets: [{
                    label: 'Sales',
                    data: [
                        155,
                        259,
                        368,
                        33,
                        312,
                        158,
                        215
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
                    text: 'Total Sales per Species',
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

                    }
                }
            }
        });
    }
});

