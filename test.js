$(function() {
    
    var graph = MapPlot()
                    .lat("lat")
                    .lon("lon")
                    .size("pop");
    
    d3_queue.queue()
        .defer(d3.json, 'json/us.json')
        .defer(d3.csv, 'testData/1970.csv')
        .defer(d3.csv, 'testData/1980.csv')
        .defer(d3.csv, 'testData/1990.csv')
        .defer(d3.csv, 'testData/2000.csv')
        .defer(d3.csv, 'testData/2010.csv')
        .await(function(error, s, a, b, c, d, e) {
            graph.map(s);
            draw();
            console.log(a);
            $('#button1').on('click', function() {
                draw(a);
            });
            $('#button2').on('click', function() {
                draw(b);
            });
            $('#button3').on('click', function() {
                draw(c);
            });
            $('#button4').on('click', function() {
                draw(d);
            });
            $('#button5').on('click', function() {
                draw(e);
            });
        });
    
    function draw(set) {
        var guy = [];
        if (arguments.length) {
            guy = set;
        }
        d3.select('#map')
            .datum(guy)
            .call(graph);
    }
    
    
    
    
});