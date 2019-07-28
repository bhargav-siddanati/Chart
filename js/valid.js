$(document).ready(function() {
    
$.ajax({
    url:"http://localhost/chart/api/apicall.php",
    type:"GET",
    success: function(data){
        console.log(data);

        var score = {
            TeamA : [],
            TeamB : []
        };

        var len = data.length;

        for(var i = 0; i < len; i++){
            if(data[i].team=="teamA")
            score.TeamA.push(data[i].score);
            else
            score.TeamB.push(data[i].score);
        }

        console.log(score);

        var charts = $("#line-chartcanvas");

        var data = {
            labels : ["match1","match2","match3","match4","match5","match6","match7"],
            datasets : [
                {
                    label : "TeamA score",
                    data : score.TeamA,
                    backgroundColor : "blue",
                    borderColor : "lightblue",
                    fill : false,
                    lineTension : 0,
                    pointRadius : 6
                },
                {
                    label : "TeamB score",
                    data : score.TeamB,
                    backgroundColor : "green",
                    borderColor : "lightgreen",
                    fill : false,
                    lineTension : 0,
                    pointRadius : 6
                }
            ]
        };

        var options = {
            title : {
                display : true,
                position : "top",
                text : "Graph",
                fontSize: 18,
                fontColor : "#333"
            },
            legend : {
                display : true,
                position : "bottom"
            }
        };

        var chart = new Chart( charts,{
            type : "line",
            data : data,
            options : options
        });
    },
    error:function(data){
        console.log(data);
    }
});

});