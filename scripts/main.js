Highcharts.setOptions({
	lang: {
  	thousandsSep: ','
  }
})
Highcharts.chart('container', {

    title: {
        text: 'Total Population, 1960-2010'
    },

    subtitle: {
        text: 'Source: The World Bank'
    },

    yAxis: {
        title: {
            text: 'Number of People'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 1960 to 2010'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1960,
            pointInterval: 10
        }
    },

    series: [{
        name: 'Afghanistan',
        data: [8996973, 11173642, 13356511, 12412308, 20779953, 29185507]
    }, {
        name: 'Bhutan',
        data: [223288, 297316, 406875, 530804, 591021, 685503]
    }, {
        name: 'Pakistan',
        data: [44988690, 58142060, 78054343, 107647921, 142343578, 179424641]
    }, {
        name: 'Sri Lanka',
        data: [9874476, 12485740, 15035834, 17325773, 18777601, 20261737]
    }, {
        name: 'Nepal',
        data: [10105050, 12074626, 15016402, 18905478, 23941110, 27013212]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.setOptions({
	lang: {
  	thousandsSep: ','
  }
})
Highcharts.chart('container2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'GDP of 5 South Asain Countries'
    },
    subtitle: {
        text: 'Source: The World Bank'
    },
    xAxis: {
        categories: ['Afghanistan', 'Bhutan', 'Pakistan', 'Sri Lanka', 'Nepal'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'GDP (constant 2010 USD)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' USD'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 2005',
        data: [9164598458.53793, 975999031.580887, 150180774567.711, 41633334150.8608, 12877563074.7127]
    }, {
        name: 'Year 2010',
        data: [15856574731.441, 1547991317.81183, 177165635077.065, 56725749221.9043, 16002656434.4746]
    }, {
        name: 'Year 2019',
        data: [19759744157.4377, 2024091802.68411, 215639252600.659, 76485840044.3994, 19774984746.8631]

    }]
});
