$(document).ready(function () {
  // prepare chart data as an array
  var sampleData = [
    { Day: "서울특별시", Running: 23222 },
    { Day: "부산광역시", Running: 16444 },
    { Day: "인천광역시", Running: 24323 },
    { Day: "대구광역시", Running: 14225 },
    { Day: "광주광역시", Running: 26395 },
    { Day: "울산광역시", Running: 28778 },
    { Day: "경기도", Running: 9566 },
    { Day: "강원도", Running: 9566 },
    { Day: "경상북도", Running: 9566 },
    { Day: "경상남도", Running: 9566 },
    { Day: "전라북도", Running: 9566 },
    { Day: "전라남도", Running: 9566 },
    { Day: "충청북도", Running: 9566 },
    { Day: "충청남도", Running: 9566 },
    { Day: "제주도", Running: 9566 },
    { Day: "대전광역시", Running: 9566 },
    { Day: "세종", Running: 9566 }
  ];
  // prepare jqxChart settings
  var settings = {
    title: " ",
    description: " ",
    enableAnimations: true,
    showLegend: true,
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    titlePadding: { left: 90, top: 0, right: 90, bottom: 10 },
    source: sampleData,

    xAxis: {
      dataField: "Day",
      unitInterval: 1,
      axisSize: "auto",
      tickMarks: {
        visible: true,
        interval: 1,
        color: "#5E91FC",
      },
      gridLines: {
        visible: false,
        interval: 1,
        color: "#5E91FC",
      },
      labels: {
        angle: 90,
        horizontalAlignment: "right",
        verticalAlignment: "center",
        rotationPoint: "right",
        offset: { y: 0 },
      },
      line: {
        visible: false,
      },
    },

    valueAxis: {
      visible: true,
      unitInterval: 10000,
      minValue: 0,
      maxValue: 40000,
    },
    colorScheme: "scheme06",
    seriesGroups: [
      {
        type: "stackedcolumn",
        columnsGapPercent: 50,
        seriesGapPercent: 0,
        series: [
          { dataField: "Running", displayText: "Running" },
        ],
      },
    ],
  };
  // setup the chart
  $("#chartContainer2").jqxChart(settings);
});
