function pieChart_license(id, text, subtext){
console.log('pieChart')
var myChart =  echarts.init(document.getElementById(id));
var colors = ['#DE386F','#49DE6F','#00FFFF','#F9DC53','#E88D4A'];
               //红、    绿、       蓝、      黄、      橙
var data = [
{
	value: 1169,
	name: '正常',
	label: {
		normal: {show:true}
	},labelLine: {
		normal: {show:true}
	},itemStyle: {
		normal: {color: colors[1]}
	}
},
{
	value: 13,
	name: '弱预警 60-70%',
	label: {
		normal: {show:true}
	},labelLine: {
		normal: {show:true}
	},itemStyle: {
		normal: {color: colors[3]}
	}
},
{
	value: 19,
	name: '中预警 70-80%',
	label: {
		normal: {show:true}
	},labelLine: {
		normal: {show:true}
	},itemStyle: {
		normal: {color: colors[4]}
	}
},
{
	value: 25,
	name: '强预警 >80%',
	label: {
		normal: {show:true}
	},labelLine: {
		normal: {show:true}
	},itemStyle: {
		normal: {color: colors[0]}
	}
}];
/*for(var i=0; i<data.length; i++){
	if(data[i].value <= 70) {
		data[i].label.normal.show = false;
		data[i].labelLine.normal.show = false;
		data[i].itemStyle.normal.color = colors[1];
	}else if(data[i].value > 70 && data[i].value <= 80) {
		data[i].itemStyle.normal.color = colors[3];
	}else if(data[i].value > 80 && data[i].value <= 90) {
		data[i].itemStyle.normal.color = colors[4];
	}else if(data[i].value > 90) {
		data[i].itemStyle.normal.color = colors[0];
	}
}*/

var option = {
    backgroundColor: 'rgba(128, 128, 128, 0)',
    // title:{
    //     text:"123",
    //     left:'center',
    //     top:'45%',
    //     textStyle:{
    //         color:"#FFF",
    //         fontSize:"80px",

    //     }
    // },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}个"
    },
    //  graphic: {
    //  elements: [
    //         {
    //          type: 'text',
    //          left: 'center', // 相对父元素居中
    //          top: 'center',  // 相对父元素上下的位置
    //          style: {
    //              fill: '#FFF',
    //               text: ['357'],
    //               zlevel:"100",
    //               font: '80px Arial Normal',
    //                  }
    //         }]
    //       },
    //  title: {
    //     text:'总考生数',
    //     left:'center',
    //     top:'center',
    //     padding:[24,0],
    //     textStyle:{
    //         color:'#fff',
    //         fontSize:18*scale,
    //         align:'center'
    //     }
    // },
       title: {
        text: text,
        subtext: subtext,
        x: 'center',
        y: '43%',
        textStyle: {
            fontSize: 28,
            fontWeight: 'normal',
            color: '#00FFFF',
        },
        subtextStyle: {
            fontSize: 16,
            fontWeight: 'normal',
            align:"center",
            color:'#CCCCCC'
        },
    },
    series: [{
        type: 'pie',
        startAngle: 259,
        radius: ['80', '100'],
        center: ['50%', '50%'],
        //color: ['#80C269', '#00FFFF', '#0090F1', '#FFA800','#4658F6'],
        itemStyle:{
     normal: {
        borderWidth: 5,
        borderColor: '#031845',
      }
},
        data: data,
        labelLine: {
            normal: {
                show: false,
                //length: 10,
                //length2: 10,
                lineStyle: {
                    color: '#CCCCCC',
                    width: 2
                }
            }
        },
        label: {
            normal: {
                formatter: '{b|{b}}\n{hr|}\n{c|{c}个}',
                rich: {
                    b: {
                        fontSize: 13,
                        color: '#FFF',
                        align: 'left',
                        padding: 4
                    },
                    hr: {
                        borderColor: '#CCCCCC',
                        width: '100%',
                        borderWidth: 2,
                        height: 0
                    },
                    c: {
                        fontSize: 13,
                        align: 'center',
                        padding: 4,
                        color:'#00EDED'
                    }
                }
            }
        }
    }

    ]
};

myChart.setOption(option);
// $('#'+id).unblock();

// 点击事件
myChart.on('click' , function (params) {
    console.log(params);
	PAGE.clickSeries = params;
	$("#myModalChart").toggleClass('fixed');
	week_barChart1('weekChart',''); //调用周图表
});

window.addEventListener("resize",function(){
    myChart.resize();
});


}
