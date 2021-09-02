var chart = null;
var series = null;
var chartType = null;
//Creates a candlestick chart from lightweight charts api
const makeCandleChart = ()=> LightweightCharts.createChart(document.getElementById('chart'), {
	width: 700,
  height: 350,
	layout: {
		backgroundColor: '#000000',
		textColor: 'rgba(255, 255, 255, 0.9)',
	},
	grid: {
		vertLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
		horzLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
	},
	crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},
	rightPriceScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
});
const makeCandleSeries = ()=> chart.addCandlestickSeries({
  upColor: 'rgba(255, 144, 0, 1)',
  downColor: '#000',
  borderDownColor: 'rgba(255, 144, 0, 1)',
  borderUpColor: 'rgba(255, 144, 0, 1)',
  wickDownColor: 'rgba(255, 144, 0, 1)',
  wickUpColor: 'rgba(255, 144, 0, 1)',
});
//Creates a bar chart from lightweight charts api
const makeBarChart = ()=>LightweightCharts.createChart(document.getElementById('chart'), {
	width: 700,
  height: 350,
	layout: {
		backgroundColor: '#ffffff',
		textColor: 'rgba(33, 56, 77, 1)',
	},
	crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},
	rightPriceScale: {
		borderColor: 'rgba(197, 203, 206, 1)',
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 1)',
	},
});
const makeBarSeries =()=> chart.addBarSeries({
  thinBars: true,
  downColor: '#000',
  upColor: '#000',
});

// Setting the default values for chart series and chart type
chart = makeCandleChart();
series = makeCandleSeries();
chartType = 'CandleStick';

// Storing the stock data from the stocklist.JSON file
var aapl = [];
for(i = 0;i<162;i++){
  aapl[i] = {time: mydata[i].date, open: mydata[i].open, high:mydata[i].high, low: mydata[i].low, close: mydata[i].close };
}
var msft = [];
for(i = 162;i<324;i++){
  msft[i-162] = {time: mydata[i].date, open: mydata[i].open, high:mydata[i].high, low: mydata[i].low, close: mydata[i].close };
}
var goog = [];
for(i = 324;i<488;i++){
  goog[i-324] = {time: mydata[i].date, open: mydata[i].open, high:mydata[i].high, low: mydata[i].low, close: mydata[i].close };
}
var googl = [];
for(i = 488;i<651;i++){
  googl[i-488] = {time: mydata[i].date, open: mydata[i].open, high:mydata[i].high, low: mydata[i].low, close: mydata[i].close };
}
var adsk = [];
for(i = 651;i<814;i++){
  adsk[i-651] = {time: mydata[i].date, open: mydata[i].open, high:mydata[i].high, low: mydata[i].low, close: mydata[i].close };
}
var amzn = [];
for(i = 814;i<977;i++){
  amzn[i-814] = {time: mydata[i].date, open: mydata[i].open, high:mydata[i].high, low: mydata[i].low, close: mydata[i].close };
}
var fb = [];
for(i = 977;i<1140;i++){
  fb[i-977] = {time: mydata[i].date, open: mydata[i].open, high:mydata[i].high, low: mydata[i].low, close: mydata[i].close };
}
var tsla = [];
for(i = 1140;i<1303;i++){
  tsla[i-1140] = {time: mydata[i].date, open: mydata[i].open, high:mydata[i].high, low: mydata[i].low, close: mydata[i].close };
}
var tsm = [];
for(i = 1303;i<1466;i++){
  tsm[i-1303] = {time: mydata[i].date, open: mydata[i].open, high:mydata[i].high, low: mydata[i].low, close: mydata[i].close };
}
var nvda = [];
for(i = 1466;i<1629;i++){
  nvda[i-1466] = {time: mydata[i].date, open: mydata[i].open, high:mydata[i].high, low: mydata[i].low, close: mydata[i].close };
}

// nameSymb stores the symbol whose button is clicked
var nameSymb = 'AAPL';
series.setData(aapl);

//function to change the graph data based on the button clicked
function addData(){
  if(nameSymb == 'AAPL'){
    series.setData(aapl);
  }else if(nameSymb == 'MSFT'){
    series.setData(msft);
  }else if(nameSymb == 'AMZN'){
    series.setData(amzn);
  }else if(nameSymb == 'GOOG'){
    series.setData(goog);
  }else if(nameSymb == 'GOOGL'){
    series.setData(googl);
  }else if(nameSymb == 'TSM'){
    series.setData(tsm);
  }else if(nameSymb == 'NVDA'){
    series.setData(nvda);
  }else if(nameSymb == 'TSLA'){
    series.setData(tsla);
  }else if(nameSymb == 'FB'){
    series.setData(fb);
  }else if(nameSymb == 'ADSK'){
    series.setData(adsk);
      }
}
const addName = (event) => {
  nameSymb = (event.target.innerHTML);
  addData();
}
const toggleGraph = (event) => {
  const type = event.target.innerHTML;
  if(type === chartType) return;
  chartType = type;
  document.getElementById('chart').innerHTML = '';
  if(type === 'CandleStick'){
    chart = makeCandleChart();
    series = makeCandleSeries();
  }else if(type === 'Bar Graph'){
    chart = makeBarChart();
    series = makeBarSeries();
  }
  addData();
}

// Adding an event listener for all the events
const buttons = document.getElementsByClassName('ohlcbutton');
for(var i = 0;i<10;i++){
  buttons[i].addEventListener('click',addName);
}
const graphButtons = document.getElementsByClassName('graphButton');
for(var i = 0;i<2;i++){
  graphButtons[i].addEventListener('click',toggleGraph);
}
