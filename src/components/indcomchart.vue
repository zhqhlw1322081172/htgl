<template>
<div class="comchart">
    <div id="main" style="width: 35%;height:347px;">
    </div>
    <div id="mains" style="width: 65%;height:347px;">
    </div>
</div>
</template>

<script>
export default {
    name:"indcomchart",
    mounted(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('main'))
        // 绘制图表
        myChart.setOption({
            title: {
                text: 'Aret chart'
            },
            
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                // left: '3%',
                // right: '4%',
                // bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['0','2010','2011','3874','7483']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'2014Q4',
                    type:'line',
                    stack: '总量',
                    areaStyle: {},
                    data:[156, 231, 134, 245, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    areaStyle: {},
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[220, 332, 301, 334, 390, 330, 320]
                },
                
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data:[200, 234, 122, 432, 433, 133, 234]
                }
            ]
        })

        var myChart2 = this.$echarts.init(document.getElementById('mains'))
        myChart2.setOption({
            title: {
                text: 'line chart'
            },
            xAxis: {
                // type: 'category',
                data: ['2014', '2016', '2018', '2020', '2022', '2024']
            },
            grid: {
                // bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [200, 932, 561, 577, 690, 330,680],
                type: 'line',
                smooth: true
            },
            {
                data: [470, 780, 371, 934, 290, 730, 920],
                type: 'line',
                smooth: true
            }]
        })
    }
}
</script>

<style scoped>
.comchart{
    display: flex;
    width: 95%;
    margin:auto;
}
#main{
    float: left;
    width:40%;
    background: white;
    margin:30px 40px;
}
#mains{
    float: left;
    width:60%;
    margin:30px 0;
    background: white;
}
</style>


