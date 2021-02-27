
var chart = new CanvasJS.Chart("chartContainer1", {
    animationEnabled: true,
    theme: "light2",
    title:{
        text: "Evolução de Novos Casos de Covid-19 em Portugal"
    },
    data: [{        
        type: "line",
        indexLabelFontSize: 16,
        dataPoints: [
            { y: 0 , indexLabel: "\u2193 Mais Baixo",markerColor: "DarkSlateGrey", markerType: "cross" },
            { y: 1 },
            { y: 515 },
            { y: 3734 },
            { y: 4284 },
            { y: 5375 },
            { y: 12425 },
            { y: 18920 },
            { y: 21410 },
            { y: 22005 },
            { y: 26480 },
            { y: 38110, indexLabel: "\u2191 Mais Alto",markerColor: "red", markerType: "triangle" }
            ]
        }]
    })
chart.render();


      
var chart = new CanvasJS.Chart("chartContainer2", {
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
        text: "Taxa de utilização global de consultas (por faxa etária)"
    },
    data: [{
        type: "pie",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
            { y: 31.08, label: "0 aos 11 meses" },
            { y: 17.34, label: "12 aos 23 meses" },
            { y: 10.62, label: "0 aos 18 anos" },
            { y: 15.02, label: "19 aos 44 anos" },
            { y: 14.07, label: "45 aos 64 anos" },
            { y: 11.22, label: "65+ anos" }
            ]
        }]
    });
chart.render();



var chart = new CanvasJS.Chart("chartContainer3", {
    title:{
        text: "Número de inscritos esperados maiores de 16 anos com registo de hábitos tabágicos em 2020"
    },
    data: [{        
        type: "area",
        dataPoints: [
            { x: new Date(2021, 00, 1), y: 2350 },
            { x: new Date(2021, 01, 1), y: 2500 },
            { x: new Date(2021, 02, 1), y: 2300 },
            { x: new Date(2021, 03, 1), y: 2100 },
            { x: new Date(2021, 04, 1), y: 2450 },
            { x: new Date(2021, 05, 1), y: 2200 },
            { x: new Date(2021, 06, 1), y: 2150 },
            { x: new Date(2021, 07, 1), y: 2000 },
            { x: new Date(2021, 08, 1), y: 1400 },
            { x: new Date(2021, 09, 1), y: 1300 },
            { x: new Date(2021, 10, 1), y: 1400 },
            { x: new Date(2021, 11, 1), y: 1250 }      
            ]
        }]
    });
chart.render();

    

var chart = new CanvasJS.Chart("chartContainer4", {
    title: {
        text: "Número de Utentes nas regiões em Portugal"
    },
    axisX: {
        valueFormatString: "MMM YYYY"
    },
    axisY2: {
        title: "Nº de Utentes",
    },
    toolTip: {
        shared: true
    },
    legend: {
        cursor: "pointer",
        verticalAlign: "top",
        horizontalAlign: "center",
        dockInsidePlotArea: true,
        itemclick: toogleDataSeries
    },
    data: [{
        type:"splineArea",
        axisYType: "secondary",
        name: "Região: Norte",
        showInLegend: true,
        markerSize: 0,
        yValueFormatString: "#,###",
        dataPoints: [		
            { x: new Date(2020, 00, 01), y: 13850 },
            { x: new Date(2020, 01, 01), y: 15889 },
            { x: new Date(2020, 02, 01), y: 14890 },
            { x: new Date(2020, 03, 01), y: 12899 },
            { x: new Date(2020, 04, 01), y: 14900 },
            { x: new Date(2020, 05, 01), y: 16920 },
            { x: new Date(2020, 06, 01), y: 18890 },
            { x: new Date(2020, 07, 01), y: 13870 },
            { x: new Date(2020, 08, 01), y: 15920 },
            { x: new Date(2020, 09, 01), y: 14950 },
            { x: new Date(2020, 10, 01), y: 17940 },
            { x: new Date(2020, 11, 01), y: 15180 },
            { x: new Date(2020, 12, 01), y: 17860 }
            ]},
        {
        type: "splineArea",
        axisYType: "secondary",
        name: "Região: Centro",
        showInLegend: true,
        markerSize: 0,
        yValueFormatString: "#,###",
        dataPoints: [
            { x: new Date(2020, 00, 01), y: 19120 },
            { x: new Date(2020, 01, 01), y: 15200 },
            { x: new Date(2020, 02, 01), y: 17190 },
            { x: new Date(2020, 03, 01), y: 19180 },
            { x: new Date(2020, 04, 01), y: 14250 },
            { x: new Date(2020, 05, 01), y: 15270 },
            { x: new Date(2020, 06, 01), y: 18300 },
            { x: new Date(2020, 07, 01), y: 16300 },
            { x: new Date(2020, 08, 01), y: 21350 },
            { x: new Date(2020, 09, 01), y: 19410 },
            { x: new Date(2020, 10, 01), y: 20480 },
            { x: new Date(2020, 11, 01), y: 16340 },
            { x: new Date(2020, 12, 01), y: 19310 }
            ]},
        {
        type: "splineArea",
        axisYType: "secondary",
        name: "Região: Sul",
        showInLegend: true,
        markerSize: 0,
        yValueFormatString: "#,###",
        dataPoints: [
            { x: new Date(2020, 00, 01), y: 12520 },
            { x: new Date(2020, 01, 01), y: 14540 },
            { x: new Date(2020, 02, 01), y: 11530 },
            { x: new Date(2020, 03, 01), y: 13560 },
            { x: new Date(2020, 04, 01), y: 16510 },
            { x: new Date(2020, 05, 01), y: 12580 },
            { x: new Date(2020, 06, 01), y: 13590 },
            { x: new Date(2020, 07, 01), y: 11520 },
            { x: new Date(2020, 08, 01), y: 14540 },
            { x: new Date(2020, 09, 01), y: 17580 },
            { x: new Date(2020, 10, 01), y: 15570 },
            { x: new Date(2020, 11, 01), y: 13410 },
            { x: new Date(2020, 12, 01), y: 16730 }
            ]
        }]
    });
chart.render();


    
var chart = new CanvasJS.Chart("chartContainer5", {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // light1, light2, dark1, dark2
    title:{
        text: "Taxa de utilização de consultas de planeamento familiar (entre os 15 e os 49 anos no ano de 2020)"
    },
    axisY: {
        includeZero: true
    },
    data: [{
        type: "column", // bar, line, area, pie
        indexLabelFontColor: "#5A5757",
        indexLabelFontSize: 16,
        indexLabelPlacement: "outside",
        dataPoints: [
            { x: 1, y: 71 },
            { x: 2, y: 55 },
            { x: 3, y: 50 },
            { x: 4, y: 65 },
            { x: 5, y: 92, indexLabel: "\u2605 Highest" },
            { x: 6, y: 68 },
            { x: 7, y: 38 },
            { x: 8, y: 71 },
            { x: 9, y: 54 },
            { x: 10, y: 60 },
            { x: 11, y: 36 },
            { x: 12, y: 21, indexLabel: "\u2691 Lowest" }
            ]
        }]
    });
chart.render();



var chart = new CanvasJS.Chart("chartContainer6", {
    animationEnabled: true,
                        
    title:{
        text:"Percentagem esperada de inscritos com 65 ou mais anos com a vacina da gripe efetuada em 2020"
    },
    axisX:{
        interval: 1
    },
    axisY2:{
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)",
        title: ""
    },
    data: [{
        type: "bar",
        name: "companies",
        axisYType: "secondary",
        color: "#014D65",
        dataPoints: [
            { y: 73, label: "decembro" },
            { y: 74, label: "novembro" },
            { y: 67, label: "outubro" },
            { y: 91, label: "setembro" },
            { y: 78, label: "agosto" },
            { y: 67, label: "julho" },
            { y: 79, label: "junho" },
            { y: 58, label: "maio" },
            { y: 61, label: "abril" },
            { y: 95, label: "março" },
            { y: 52, label: "fevereiro" },
            { y: 87, label: "janeiro" }
            ]
        }]
    });
chart.render();



function toogleDataSeries(e){
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else{
            e.dataSeries.visible = true;
        }
        chart.render();
}