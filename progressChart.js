// 圆圈进度图
function progressChart(id, text, subText, unit, value, percent, type){
console.log('progressChart')
var myChart =  echarts.init(document.getElementById(id));

var centerLeft = '40%';
if(type == 'CS')
	centerLeft = '30%';
//var percent = 0.91;

var dataArr = [{
    value: value,
    name: text
}];

var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#5CF9FE' // 0% 处的颜色
    },
    {
        offset: 0.17,
        color: '#468EFD' // 100% 处的颜色
    },
    {
        offset: 0.9,
        color: '#468EFD' // 100% 处的颜色
    },
    {
        offset: 1,
        color: '#5CF9FE' // 100% 处的颜色
    }
]);
var colorSet = [
    [percent, color],
    [1, '#15337C']
];

var rich = {
    white: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '500',
        padding: [-60, 0, 0, 0]
    },
    bule: {
        fontSize: 25,
        fontFamily: 'DINBold',
        color: '#fff',
        fontWeight: '700',
        padding: [-30, 0, 0, 0],
    },
    radius: {
        width: 95,
        height: 25,
		padding: [0, 0, 2, 0],
        // lineHeight:80,
        borderWidth: 1,
        borderColor: '#0092F2',
        fontSize: 14,
        color: '#fff',
        backgroundColor: '#1B215B',
        borderRadius: 20,
        textAlign: 'center',
    },
    size: {
        height: 115, // 文字位置
        padding: [10, 0, 0, 0]
    }
}

var option = {
    backgroundColor: 'rgba(128, 128, 128, 0)',
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
	title: { //右边半圆文字内容
		show: true,
        text: percent*100+'%',
        subtext: subText,
        right: '18%',
        top: '40%',
        textStyle: {
            color: '#58E8FE',
            fontSize: 20
        },
        subtextStyle: {
            color: '#FFF',
            fontSize: 13
        }
    },
    series: [{ //内圆
            type: 'pie',
            radius: '95%',
            center: [centerLeft, '50%'],
            z: 0,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.RadialGradient(.5, .5, 1, [{
                            offset: 0,
                            color: 'rgba(17,24,43,0)'
                        },
                        {
                            offset: .5,
                            // color: '#1E2B57'
                            color:'rgba(28,42,91,.6)'
                        },
                        {
                            offset: 1,
                            color: '#141C33',
                            // color:'rgba(17,24,43,0)'
                        }
                    ], false),
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false
            },
            data: [100],
        },
        {
            type: 'gauge',
            name: '外层辅助',
            radius: '84%',
            startAngle: '225',
            endAngle: '-45',
			center: [centerLeft, '50%'],
            splitNumber: '100',
            pointer: {
                show: false
            },
            detail: {
                show: false,
            },
            data: [{
                value: 1
            }],
            // data: [{value: 1, name: 90}],
            title: {
                show: true,
                offsetCenter: [0, 30],
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 20,
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, '#00FFFF']
                    ],
                    width: 2,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#051932',
                    width: 0,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            }
        },
        {
            type: 'gauge',
            radius: '80%',
            startAngle: '225',
            endAngle: '-45',
			center: [centerLeft, '50%'],
            pointer: {
                show: false
            },
            detail: {
                formatter: function(value) {
                    var num = Math.round(value);
                    return '{bule|' + num + '}{white|'+unit+'}' + '{size|' + '}\n{radius|'+text+'}';
                },
                rich: rich,
                "offsetCenter": ['0%', "0%"],
            },
            data: dataArr,
            title: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colorSet,
                    width: 25,
                    // shadowBlur: 15,
                    // shadowColor: '#B0C4DE',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                length: 25,
                lineStyle: {
                    color: '#00377a',
                    width: 2,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            },
			/*markPoint: {
    			data: [{
    				x: 270,
    				y: 30, 
    				symbol: 'circle', 
    				value: '达标率：' + percent*100 + '%',
    				symbolSize: 15,
    				silent: false,
    				label: {
    					normal: {
    						show: true,
    						position:'right',
    						color: '#FFF',
							fontSize: 15
    					}
    				},
    				itemStyle: {
    					normal: {
    						color:  '#468FFD'
    					}
    				}
    			}]
            }*/
        },
        {
            name: '灰色内圈', //刻度背景
            type: 'gauge',
            z: 2,
            radius: '70%',
            startAngle: '225',
            endAngle: '-45',
            center: [centerLeft, '50%'], //整体的位置设置
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [1, '#018DFF']
                    ],
                    width: 2,
                    opacity: 1, //刻度背景宽度
                }
            },
            splitLine: {
                show: false
            },
            // data: [{
            //     show: false,
            //     value: '80'
            // }], //作用不清楚
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            axisTick: {
                show: false
            },
            detail: {
                show: 0
            }
        },
        {
            name: "白色圈刻度",
            type: "gauge",
            radius: "70%",
            startAngle: 225, //刻度起始
            endAngle: -45, //刻度结束
			center: [centerLeft, '50%'],
            z: 4,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 16, //刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: 'rgba(1,244,255, 0.9)'
                } //刻度节点线
            },
            axisLabel: {
                color: 'rgba(255,255,255,0)',
                fontSize: 12,
            }, //刻度节点文字颜色
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ""
            }]
        },
        { //内圆
            type: 'pie',
            radius: '66%',
            center: [centerLeft, '50%'],
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
                            offset: 0,
                            color: '#4978EC'
                        },
                        {
                            offset: .5,
                            color: '#1E2B57'
                        },
                        {
                            offset: 1,
                            color: '#141F3D'
                        }
                    ], false),
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false
            },
            data: [100],
        },
		

    ]
};

if(type == 'PS'){
	option.series.push({
            type: 'pie',  // 右边半圆
            label: {
                show: false
            },
			hoverAnimation: false,  //鼠标 hover时 在扇区上的放大动画效果
			tooltip: {show: false},
            center: ['66%', '50%'],
            radius: ['68%', '70%'],
            startAngle:  180,
            data: [
                {
                    name: '不显示', 
                    value: 110,
                    itemStyle: { 
                        color:  'transparent'
                    }
                },
                {
                    name: '显示',
                    value:   140,
                    itemStyle: {
                        color: 'skyblue'
                    }
                },
                {
                    name: '不显示', 
                    value: 110,
                    itemStyle: { 
                        color: 'transparent'
                    }
                },
            ]
        });
}
else{
	option.title = false;
}

myChart.setOption(option);
// $('#'+id).unblock();

window.addEventListener("resize",function(){
         myChart.resize();
});
}