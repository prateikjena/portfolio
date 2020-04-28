AmCharts.makeChart("chartdiv", {
    "type": "radar",
    "categoryField": "country",
    "startDuration": 2,
    "fontSize": 13,
    "theme": "chalk",
    "graphs": [{
        "balloonText": "[[value]] percentage achieved",
        "bullet": "round",
        "bulletSize": 9,
        "id": "AmGraph-1",
        "lineAlpha": 1,
        "lineThickness": 2,
        "valueField": "Percentages"
    }],
    "guides": [],
    "valueAxes": [{
        "axisTitleOffset": 15,
        "gridType": "circles",
        "id": "ValueAxis-1",
        "minimum": 0,
        "position": "right",
        "stackType": "none",
        "zeroGridAlpha": 4,
        "axisAlpha": 0.53,
        "axisColor": "#FFCFCF",
        "color": "#F2DADA",
        "dashLength": 1,
        "fillAlpha": 0.04,
        "fontSize": 11,
        "gridAlpha": 0.51,
        "labelRotation": 30.6,
        "minHorizontalGap": 72,
        "offset": -22,
        "tickLength": 8,
        "title": "",
        "titleFontSize": 27,
        "titleRotation": 0
    }],
    "allLabels": [],
    "balloon": {},
    "titles": [],
    "dataProvider": [{
            "country": "HTML",
            "Percentages": "225"
        },
        {
            "country": "CSS",
            "Percentages": "210"
        },
        {
            "country": "Javascript",
            "Percentages": "200"
        },
        {
            "country": "PHP",
            "Percentages": "178"
        },
        {
            "country": "Responsive Design",
            "Percentages": "200"
        },
        {
            "country": "React",
            "Percentages": "100"
        }
    ]
});