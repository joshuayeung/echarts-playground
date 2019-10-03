// IPX
function barChart(id, type){
console.log('barChart');
var myChart =  echarts.init(document.getElementById(id));
var fontSize = 16;
var showTitle = true;
var gridtop = '15%';
var gridbottom = '22%'

myChart.showLoading({
	text: 'loading',
	color: '#c23531',
	textColor: '#000',
	maskColor: 'rgba(255, 255, 255, 0.8)',
	zlevel: 0
});

if(type == 'comprehensive'){
	showTitle = false;
	gridtop = '5%';
	gridbottom = '23%';
	fontSize = 12;
}

//------------------------------------引用请注明出处

var myData = /*Object.keys(PAGE.chartsData.bar_databeastUsage);*/['CMI',
            'SAP',
            'Syniverse'];

var databeast = /*PAGE.chartsData.bar_databeastUsage;*/{
    1: [18.771, 21.18, 20.46, 47.02, 10.06, 64.06, 59.19 ],
    2: [0.46, 0.69, 1.64, 1.95, 0.70, 1.78, 0.94],
    3: [18.68, 18.75, 25.18, 32.67, 20.86, 39.78, 32.96 ]
};
console.log('myData',myData,databeast)
var databeast2 = /*PAGE.chartsData.bar_databeast上周值;*/{
    1: [33.45, 40.85, 48.32, 34.92, 25.25, 52.29, 52.32],
    2: [0.87, 1.2, 1.33, 0.88, 0.62, 1.82, 1.07],
    3: [26.28, 27.75, 27.78, 18.45, 22.34, 42.20, 42.96]
};

var timeLineData = /*Object.keys(PAGE.chartsData.bar_databeastUsage);*/[1, 2, 3];

function optiontitle(value) {
   return {
        text: value ,
        x: 'center',
        top: '4%'
    }

}

var option = {
    baseOption: {

        timeline: {
            show: false,
            bottom: 30,
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function(params) {
                    console.log(params);
                    return params.name;
                }
            },
            label:{
                normal:{
                    fontSize:8,
                }
            },
            autoPlay: true,
            currentIndex: 6,
            playInterval: 5000,
            label: {
                normal: {
                    show: true,
                    interval: 'auto',
                    formatter: function(value) {
                        return value
                    }
                },
            },
            data: [],
        },
        title: {
            //subtext:'IPX',
			//left: '1%',
            show: true,
            textStyle: {
                fontSize: 12,
				color:'#999'
            },
        },

        grid: [{
            show: false,
            left: '2%',
            top: '10%',
			right:'12%',
            bottom: '3%',
            containLabel: true,
        }],

        legend: {
			icon: 'rect',
			itemWidth: 14,
			itemHeight: 5,
			itemGap: 13,
			top:'32%',
			//top:'84%',
			orient:'vertical',
			data: ['今周值', '上周值'],
			right: '0%',
			textStyle: {
				fontSize: 12,
				color: '#F1F1F3'
			},
			selected: {
				// '上周值': false
			}
		},

        xAxis: [{
            boundaryGap: 0,
            type: 'category',
            data: /*PAGE.chartsData.bar_timeData, */ ["Mon",'Tue','Wed','Thu','Fri','Sat','Sun'],
            axisLabel: {
                show: true,
                lineStyle: {
                color: '#57617B' //坐标轴线线的颜色。
                 },
                textStyle: {
                    fontSize: 10,
					color:'#999',
                },
            },
            splitLine: {
                show: false
            },
        }],
        yAxis: [{
            type: 'value',
            //name: '流量(GB)',
            //min: 50,
            splitLine: {
                show: true,
				lineStyle: {
					opacity: 0.5,
					color: '#444' //坐标轴线线的颜色。
				}
            },
			 lineStyle: {
                color: '#57617B' //坐标轴线线的颜色。
                 },
            axisLabel: {
                formatter: function(value) {
                    return value + '%'
                },
				textStyle: {
                    fontSize: 10,
					color:'#999',
                },
            },
            data: myData,
        }],
        series: [],

    },

    options: [],


};

for (var i = 0; i < myData.length; i++) {
    option.baseOption.timeline.data.push(myData[i]);
    option.options.push({
        title: optiontitle(myData[i]),
        series: [{
            name: '今周值',
            type: 'line',
            barGap: 15,
            barWidth: 15,
            smooth: true,
            areaStyle: {
            normal: {
                color:'#47CEFE',
				opacity:0.4,
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            },
        },
       itemStyle: {
                normal: {
                    color: '#36CAFE'
                },
                emphasis: {
                color: 'rgb(99,250,235)',
                borderColor: 'rgba(99,250,235,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
        },

       lineStyle: {
            normal: {
                width: 1
            }
        },

        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: true,
            }
        },
            data: databeast[timeLineData[i]],
        },{
            name: '上周值',
            type: 'line',
            barGap: 15,
            smooth: true,
            barWidth: 15,
            areaStyle: {
            normal: {
                color: '#33DCA2',
				opacity:0.4,
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
       itemStyle: {
                normal: {
                     color: '#36DCA3'
                },
                emphasis: {
                color: 'rgb(0,196,132)',
                borderColor: 'rgba(0,196,132,0.15)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.05);',
                borderWidth: 10,

            },
        },

       lineStyle: {
            normal: {
                width: 1
            }
        },

        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: true,
            }
        },
            data: databeast2[timeLineData[i]],
        }]
    });
}

myChart.setOption(option);
myChart.hideLoading();
// $('#'+id).unblock();

window.addEventListener("resize",function(){
         myChart.resize();
});
}


// 数据流量
function barChart3(id, type, legends, databeast1, databeast2, dates,  timeLineData){
console.log('barChart3');
var myChart =  echarts.init(document.getElementById(id));
var fontSize = 16;
var showTitle = true;
var gridtop = '15%';
var gridbottom = '22%'
/*
myChart.showLoading({
	text: 'loading',
	color: '#c23531',
	textColor: '#000',
	maskColor: 'rgba(255, 255, 255, 0.8)',
	zlevel: 0
});
*/
if(type == 'comprehensive'){
	showTitle = false;
	gridtop = '5%';
	gridbottom = '23%';
	fontSize = 12;
}

function optiontitle(value) {
   return {
        text: value ,
        x: 'center',
        top: '4%'
    }

}

var option = {
    baseOption: {

        timeline: {
            show: false,
            bottom: 30,
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function(params) {
                    console.log(params);
                    return params.name;
                }
            },
            label:{
                normal:{
                    fontSize:8,
                }
            },
            autoPlay: true,
            currentIndex: 6,
            playInterval: 5000,
            label: {
                normal: {
                    show: true,
                    interval: 'auto',
                    formatter: function(value) {
                        return value
                    }
                },
            },
            data: [],
        },
        title: {
            //subtext:'IPX',
			//left: '1%',
            show: true,
            textStyle: {
                fontSize: 12,
				color:'#999'
            },
        },

        grid: [{
            show: false,
            left: '2%',
            top: '10%',
			right:'12%',
            bottom: '3%',
            containLabel: true,
        }],

        legend: {
			icon: 'rect',
			itemWidth: 14,
			itemHeight: 5,
			itemGap: 13,
			top:'32%',
			//top:'84%',
			orient:'vertical',
			data: legends,
			right: '0%',
			textStyle: {
				fontSize: 12,
				color: '#F1F1F3'
			},
			selected: {
				//'上周值': false
			}
		},

        xAxis: [{
            boundaryGap: 0,
            type: 'category',
            data: dates,
            axisLabel: {
                show: true,
                lineStyle: {
                color: '#57617B' //坐标轴线线的颜色。
                 },
                textStyle: {
                    fontSize: 10,
					color:'#999',
                },
            },
            splitLine: {
                show: false
            },
        }],
        yAxis: [{
            type: 'value',
            //name: '流量(GB)',
            //min: 50,
            splitLine: {
                show: true,
				lineStyle: {
					opacity: 0.5,
					color: '#444' //坐标轴线线的颜色。
				}
            },
			 lineStyle: {
                color: '#57617B' //坐标轴线线的颜色。
                 },
            axisLabel: {
               /*formatter: function(value) {
                    return value + '%'
                },*/
				textStyle: {
                    fontSize: 10,
					color:'#999',
                },
            },
            data: timeLineData,
        }],
        series: [],

    },

    options: [],


};

for (var i = 0; i < timeLineData.length; i++) {
    option.baseOption.timeline.data.push(timeLineData[i]);
    option.options.push({
        title: optiontitle(timeLineData[i]),
        series: [{
            name: legends[0] ,
            type: 'line',
            barGap: 15,
            barWidth: 15,
            smooth: true,
            areaStyle: {
            normal: {
                color:'#47CEFE',
				opacity:0.4,
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            },
        },
       itemStyle: {
                normal: {
                    color: '#36CAFE'
                },
                emphasis: {
                color: 'rgb(99,250,235)',
                borderColor: 'rgba(99,250,235,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
        },

       lineStyle: {
            normal: {
                width: 1
            }
        },

        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: true,
            }
        },
            data: databeast1[timeLineData[i]],
        },{
            name: legends[1] ,
            type: 'line',
            barGap: 15,
            smooth: true,
            barWidth: 15,
            areaStyle: {
            normal: {
                color: '#33DCA2',
				opacity:0.4,
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
       itemStyle: {
                normal: {
                     color: '#36DCA3'
                },
                emphasis: {
                color: 'rgb(0,196,132)',
                borderColor: 'rgba(0,196,132,0.15)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.05);',
                borderWidth: 10,

            },
        },

       lineStyle: {
            normal: {
                width: 1
            }
        },

        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: true,
            }
        },
            data: databeast2[timeLineData[i]],
        }]
    });
}

myChart.setOption(option);
myChart.hideLoading();
// $('#'+id).unblock();

window.addEventListener("resize",function(){
         myChart.resize();
});
}
