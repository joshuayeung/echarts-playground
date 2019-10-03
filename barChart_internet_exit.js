// 堆叠条形图 Internet Exit
function barChart_internet_exit(id, type, yData, data1, data2, data3){
console.log('barChart2');
var myChart =  echarts.init(document.getElementById(id));

//var data1 = [23923, 34210, 123422, 124444, 314284];
//if(type=='week')
//	data1 = [30, 40, 50, 80, 90];

var data1Max = Math.max.apply( Math, data1 );
var offsetValue = 10;  //位移值
var max = 100;
// 100 - 90 之间位置相差35
var difference = 2.5;
/*var data2 = //[60, 70,80,90,100];
[
{
    value: 60,
    label: {
        normal: {
            offset: [ (max-60)*difference + offsetValue, 0],
        }
    }
},
{
    value: 70,
    label: {
        normal: {
            offset: [ (max-70)*difference + offsetValue, 0],
        }
    }
},
{
    value: 80,
    label: {
        normal: {
            offset: [ (max-80)*difference + offsetValue, 0],
        }
    }
},
{
    value: 90,
    label: {
        normal: {
            offset: [ (max-90)*difference + offsetValue, 0],
        }
    }
},
{
    value: 100,
    label: {
        normal: {
            offset: [ (max-100)*difference + offsetValue, 0]
        }
    }
}
]; */
var data2s = [];
for(var i=0; i<data2.length; i++){
	data2s.push({
		value: data2[i],
		value2: data3[i],
		label: {
			normal: {
				//offset: [ (max-data2[i])*difference + offsetValue, 0]
			}
		}
	})
}


var option = {
    backgroundColor:'rgba(0,0,0,0)',
    grid: {
        left: '5%',
        top: '5%',
        bottom: '3%',
        right: '15%',
        containLabel: true
    },
    legend: {
        show: true,
		textStyle: {
          color: '#999'
        }
    },
	tooltip: {
		show: true,
	},
    xAxis: {
		//max: max,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#999',
            fontSize: 14
        },
        data: yData //['YYYY', 'XXXX', 'China', 'CMI', 'Apple']
        //data:[]
    },
    series: [{
		name: '忙时流量',
        type: 'bar',
        barGap: '-100%',
        barWidth: 28,
        itemStyle: {
            normal: {
                color: '#F9DC53',/*new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                        {offset: 1, color: '#a6ff33'},
                        {offset: 0.3, color: '#ddffb2'},
                        {offset: 0, color: '#ffffff'},
                    ]
                ),*/
                barBorderRadius: 0
            },
            emphasis: {
                    barBorderWidth: 10,
                    shadowBlur: 20,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: '#ffffff'
                }
        },
        label: {
            normal: {
                show: false
            }
        },
        z: -10,
        data: data1   //外,黄
        //data: []
    }, {
		name: '连接带宽容量',
        type: 'bar',
        barGap: '-100%',
        barWidth: 28,
        itemStyle: {
            normal: {
                color: '#158cc9',
                //borderColor: 'rgba(255,255,255,0.5)',
                borderWidth: 1,
               // shadowColor: '#ffffff',
               // shadowBlur: 10,
                barBorderRadius: 0
            },
            emphasis: {
                    barBorderWidth: 10,
                    shadowBlur: 20,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: '#ffffff'
                }
        },
        label: {
            normal: {
                show: true,
                //position: 'right',
				position: [215,5],
                fontSize: 12,
                color: '#fff000',
                //offset: [5,0],
                formatter: function(params){
                    return  params.data.value2 + '%'; //data1[params.dataIndex]===0?'-':data1[params.dataIndex]+'%'
                }
            }
        },
        z: -12,
        data: data2s  //底，蓝
    }]
};

myChart.setOption(option);

// 点击事件
myChart.on('click' , function (params) {
    console.log(params);
	PAGE.clickSeries = params;
	$("#myModalChart").toggleClass('fixed');
	week_barChart1('weekChart',''); //调用周图表
});

// $('#'+id).unblock();

window.addEventListener("resize",function(){
         myChart.resize();
});
}
