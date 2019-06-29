$(document).ready(function ()
{
    Chart.defaults.global.defaultFontColor = 'black';
    Chart.defaults.global.defaultFontFamily = 'Roboto';

    let chart = document.getElementById('Chart').getContext('2d');
    let testChart = new Chart(chart, {
        type: 'line',
        data: {
            labels: ['8:00', '9:00',
                '10:00', '11:00',
                '12:00', '13:00',
                '14:00',],
            datasets: [{
                label: 'Population',
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
});
