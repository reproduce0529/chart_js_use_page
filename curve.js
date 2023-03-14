$(document).ready(function () {
   
    

    // prepare chart data as an array
    var sampleData = [
            { Day: 'AUG', Running: 23222, Goal: 40 },
            { Day: 'SEP', Running: 16444, Goal: 50 },
            { Day: 'OCT', Running: 24323, Goal: 60 },
            { Day: 'NOV', Running: 14225, Goal: 40 },
            { Day: 'DEC', Running: 26395, Goal: 50 },
            { Day: 'JAN 2021', Running: 28778, Goal: 60 },
            { Day: 'FEB', Running: 9566, Goal: 90 }
        ];
    // prepare jqxChart settings
    var settings = {
        title: "",
        description: " ",
        enableAnimations: true,
        showLegend: true,
        padding: { left: 10, top: 10, right: 15, bottom: 10 },
        titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
        source: sampleData,
        colorScheme: 'scheme05',

        xAxis: {
            dataField: 'Day',
            unitInterval: 1,
            tickMarks: { visible: true, interval: 1 },
            gridLinesInterval: { visible: true, interval: 1 },
            valuesOnTicks: false,
            padding: { bottom: 10 }
        },
        valueAxis: {
            unitInterval: 5000,
            minValue: 5000,
            maxValue: 35000,
            title: { text: '' },
            labels: { horizontalAlignment: 'right' }
        },


        seriesGroups:
            [
                {
                    type: 'line',
                    series:
                    [
                        {
                            dataField: 'Running',
                            symbolType: 'square',
                            labels:
                            {
                                visible: true,
                                backgroundColor: '#FE9204',
                                backgroundOpacity: 0.2,
                                borderColor: '#FE9204',
                                borderOpacity: 0.7,
                                padding: { left: 5, right: 5, top: 0, bottom: 0 }
                            }
                        }
                    ]
                }
            ]
    };
    // setup the chart
    $('#chartContainer1').jqxChart(settings);

    
});

