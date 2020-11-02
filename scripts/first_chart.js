Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Peach','Apples', 'Bananas', 'Oranges'],

    },
    yAxis: {
        min: 0,
        title: {
            text: 'Items of fruit that were eaten last week in Mike and Sam\'s house',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
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
      name: 'Mike',
      data: [6, 1, 0, 4]
  }, {
      name: 'Sam',
      data: [6, 5, 7, 3]
  }]
});
