# reusable-us-map-plot API Reference

A reusable charting function for plotting points on a map of the United States.

```javascript
//simple set of points
var points = [
  {
    id: 1,
    lat: 31.7619,
    lon: -106.485
  },
  {
    id: 2,
    lat: 37.7749,
    lon: -122.4194
  },
  {
    id: 3,
    lat: 37.8651,
    lon: -119.5383
  }
];

//JSON for map
var map = {
  //A whole bunch of JSON data to make a map
};

//instance of MapPlot
var graph = MapPlot()
              .width(800) //sets width of chart to 800
              .height(800) //sets height of chart to 800
              .lat('lat') //uses 'lat' property from 'points' for latitude
              .lon('lon') //uses 'lon' property from 'points' for longitude
              .map(map); //uses 'map' to construct the map of the U.S.

```

## API Functions

\# *MapPlot*()

> Constructs a MapPlot object.

\# *MapPlot*.**width**(value)
> Sets the width of the chart to `value` and returns that chart instance.

\# *MapPlot*.**height**(value)
> Sets the height of the chart to `value` and returns that chart instance.

\# *MapPlot*.**lat**(value)
> Specifies which property of the data (`value`) to use as latitude on the map.

\# *MapPlot*.**lon**(value)
> Specifies which property of the data (`value`) to use as longitude on the map.

\# *MapPlot*.**map**(value)
> Takes `value` as a parameter where value is a json file that will be used to contruct the map. This chart is currently dependent on the json files provided to make the map of the U.S.
