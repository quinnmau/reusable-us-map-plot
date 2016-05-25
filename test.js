$(function() {
    
    var csv;
    var graph = MapPlot()
                    .lat("lat")
                    .lon("lon");
    
    d3_queue.queue()
        .defer(d3.json, 'json/us.json')
        .defer(d3.csv, 'testData/intro.csv')
        .defer(d3.csv, 'testData/test.csv')
        .defer(d3.csv, 'testData/test2.csv')
        .await(function(error, s, i, c, c2) {
            graph.map(s);
            draw();
            $('#button1').on('click', function() {
                draw(i);
            });
            $('#button2').on('click', function() {
                draw(c);
            });
            $('#button3').on('click', function() {
                draw(c2);
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