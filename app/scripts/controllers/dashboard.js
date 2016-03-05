'use strict';
app.controller('DashboardCtrl', function ($scope, dashboardService) {

    $scope.data = [];
    $scope.categories = [];


    dashboardService.get('sub-group-monthwise.json').then(function (data) {
        $scope.categories = data.categories;
        $scope.data = data.data;

        $scope.title = "Cumulative HIV infection by sub groups";

        Highcharts.chart('container', {
            chart: {
                type: 'area'
                //backgroundColor: '#FCFFC5'
            },
            title: {
                text: $scope.title
            },
            xAxis: {
                title: {
                    text: 'Month'
                },
                categories: $scope.categories
            },
            yAxis: {
                title: {
                    text: 'Count'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br />' +
                        this.x + ': ' + this.y;
                }
            },
            legend: {
                enabled: true,
                align: 'center',
                margin: 30,
                width: 1000,
                padding: 20,
                borderWidth: 0,
                //itemMarginTop: 15,
                //itemMarginBottom: 15,
                itemStyle: {
                    color: '#000',
                    fontFamily: 'MuseoS500'
                }
            },
            series: $scope.data
        });
    });
}).controller('page2Ctrl', function ($scope, dashboardService) {
    $scope.data = [];
    $scope.categories = [];

    dashboardService.get('age-group-monthwise.json').then(function (data) {
        $scope.categories = data.categories;
        $scope.data = data.data;
        $scope.title = "Cumulative HIV infection by age group";

        Highcharts.chart('container', {
            chart: {
                type: 'line'
            },
            title: {
                text: $scope.title
            },
            xAxis: {
                title: {
                    text: 'Month'
                },
                categories: $scope.categories
            },
            yAxis: {
                title: {
                    text: 'Count'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br />' +
                        this.x + ': ' + this.y;
                }
            },
            legend: {
                align: 'center'
            },
            series: $scope.data
        });
    });
}).controller('page3Ctrl', function ($scope, dashboardService) {
    $scope.data = [];
    $scope.categories = [];

    dashboardService.get('dashboard.json').then(function (data) {
        $scope.categories = data.categories;
        $scope.data = data.data;
        $scope.title = "Page3";

        Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Cumulative HIV Infection by age group'
            },
            xAxis: {
                categories: ['0-4', '5 - 9', '10 - 14', '15 - 19', '20 - 24', '20 - 24', '25 - 29', '30 - 39', '40 - 49', '50-above'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Count',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' count'
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
                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Male',
                data: [107, 31, 635, 203, 2, 107, 31, 635, 203, 2]
            }, {
                name: 'Female',
                data: [133, 156, 947, 408, 6, 133, 156, 947, 408, 6]
            }, {
                name: 'TG',
                data: [1052, 954, 4250, 740, 38, 1052, 954, 4250, 740, 38]
            }]
        });
    });
}).controller('page4Ctrl', function ($scope, dashboardService) {
//http://embed.plnkr.co/AsxnDG/


    $scope.chartData = [

        {label: "Male", value: 12},

        {label: "Female", value: 30},

        {label: "TG", value: 20}
    ];

    $scope.chartColors = ["#31C0BE", "#c7254e", "#98a0d3"];


    var months = [
        {id: 1, tag: 'Baisakh'},
        {id: 2, tag: 'Jestha'},
        {id: 3, tag: 'Asar', selected: true},
        {id: 4, tag: 'Shrawan'},
        {id: 5, tag: 'Bhadra'},
        {id: 6, tag: 'Ashoj'},
        {id: 7, tag: 'Kartik'},
        {id: 8, tag: 'Mangshir'},
        {id: 9, tag: 'Poush'},
        {id: 10, tag: 'Magh'},
        {id: 11, tag: 'Falgun'},
        {id: 11, tag: 'Chaitra'}
    ];

}).controller('page5Ctrl', function ($scope, dashboardService) {
//http://embed.plnkr.co/AsxnDG/


    dashboardService.get('region-wise-data.json').then(function (data) {
        $scope.categories = data.categories;
        $scope.data = data.data;

        Highcharts.chart('container', {
            chart: {
                type: 'column'
                //backgroundColor: '#FCFFC5'
            },
            title: {
                text: "Distribution of Reported HIV cases by Region(FY 71/72)"
            },
            xAxis: {
                title: {
                    text: 'Region'
                },
                categories: $scope.categories
            },
            yAxis: {
                title: {
                    text: 'Count'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br />' +
                        this.x + ': ' + this.y;
                }
            },
            legend: {
                enabled: false,
                align: 'center',
                margin: 30,
                width: 1000,
                padding: 20,
                borderWidth: 0,
                //itemMarginTop: 15,
                //itemMarginBottom: 15,
                itemStyle: {
                    color: '#000',
                    fontFamily: 'MuseoS500'
                }
            },
            series: $scope.data
        });

    });
});
