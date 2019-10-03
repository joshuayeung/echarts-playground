
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

var myData = Object.keys(PAGE.chartsData.bar_databeastUsage);/*['CR and BNG (Inbound) (MIT)', 
            'CR and BNG (Inbound) (GNC)', 
            'CR and BNG (Outbound) (MIT)', 
            'CR and BNG (Outbound) (GNC)',
            'BNG and IDCRT (Inbound) (MIT)',
            'BNG and IDCRT (Inbound) (GNC)',
            'BNG and IDCRT (Outbound) (MIT)',
            'BNG and IDCRT (Outbound) (GNC)'];*/
			
var databeast = PAGE.chartsData.bar_databeastUsage;/*{
    1: [78, 75, 70, 65, 68, 75, 80, 85, 80, 75, 76],
    2: [71, 81, 83, 87, 80, 85, 86, 85, 88, 78, 86],
    3: [64, 67, 72, 75, 77, 80, 81, 82, 83, 85, 90],
    4: [78, 75, 70, 65, 68, 75, 80, 85, 80, 75, 76],
    5: [71, 81, 83, 87, 80, 85, 86, 85, 88, 78, 86],
    6: [64, 67, 72, 75, 77, 80, 81, 82, 83, 85, 90],
    7: [78, 75, 70, 65, 68, 75, 80, 85, 80, 75, 76],
    8: [71, 81, 83, 87, 80, 85, 86, 85, 88, 78, 86],

};*/
console.log('myData',myData,databeast)
var databeast2 = PAGE.chartsData.bar_databeastThreshold;/*{
    1: [71, 81, 83, 87, 80, 85, 86, 85, 88, 78, 86],
    2: [64, 67, 72, 75, 77, 80, 81, 82, 83, 85, 90],
    3: [78, 75, 70, 65, 68, 75, 80, 85, 80, 75, 76],
    4: [71, 81, 83, 87, 80, 85, 86, 85, 88, 78, 86],
    5: [64, 67, 72, 75, 77, 80, 81, 82, 83, 85, 90],
    6: [78, 75, 70, 65, 68, 75, 80, 85, 80, 75, 76],
    7: [71, 81, 83, 87, 80, 85, 86, 85, 88, 78, 86],
    8: [64, 67, 72, 75, 77, 80, 81, 82, 83, 85, 90],

};*/

var timeLineData = Object.keys(PAGE.chartsData.bar_databeastUsage); //[1, 2, 3, 4, 5, 6, 7, 8];

function optiontitle(value) {
   return {
        text: 'Traffic between \n' + value ,
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
            //   text:'大北京景点帅哥美女统计',
            show:true,
            textStyle: {
                fontSize: 12,
				color:'#fff'
            },
        },
        
        grid: [{
            show: false,
            left: '2%',
            top: '4%',
			right:'12%',
            bottom: '1%',
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
			data: ['Usage', 'Threshold'],
			right: '0%',
			textStyle: {
				fontSize: 12,
				color: '#F1F1F3'
			},
			selected: {
				'Threshold': false
			}
		},

        xAxis: [{
            boundaryGap: 0,
            type: 'category',
            data: PAGE.chartsData.bar_timeData, // ['4:00','4:30','5:00','5:30','6:00','6:30',"7:00","7:30", "8:00", "8:30", "9:00"],
            axisLabel: {
                show: true,
                lineStyle: {
                color: '#57617B' //坐标轴线线的颜色。
                 },
                textStyle: {
                    fontSize: 10,
					color:'#fff',
                },
            },
            splitLine: {
                show: false
            },
        }],
        yAxis: [{
            type: 'value',
            name: '流量(GB)',
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
					color:'#fff',
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
            name: 'Usage',
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
            name: 'Threshold',
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
$('#'+id).unblock();

window.addEventListener("resize",function(){
         myChart.resize();
});
}