<template>
 <div class="chart">
    <div id="zhu" style="width: 747px;height:347px;">
    </div>
    <div id="bing" style="width: 198px;height:347px;">
        <span>inspan...30 </span>
    </div>
</div>

</template>

<script>
export default {
    name:"indchart",
    mounted(){
        // var echarts = require('echarts')

        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('zhu'))
        // 绘制图表
        myChart.setOption({
            title: {
                text: 'Bar chart'
            },
            // legend: {},
            tooltip: {},
            dataset: {
                source: [
                    {product: 'Matcha Latte', '2015': 2006, '2016': 100, '2017': 89},
                    {product: 'Milk Tea', '2015':2007, '2016': 75, '2017': 69},
                    {product: 'Cheese Cocoa', '2015': 2008, '2016': 50, '2017': 45},
                    {product: 'Cheese Cocoa', '2015': 2009, '2016': 75, '2017': 70},
                    {product: 'Walnut Brownie', '2015': 2010, '2016': 50, '2017': 36},
                    {product: 'Walnut Brownie', '2015': 2011, '2016': 100, '2017': 90}
                    ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
                {type: 'bar'},
                {type: 'bar'}
            ]

        })


        var myChart2 = this.$echarts.init(document.getElementById('bing'))
        // 绘制图表
        myChart2.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                // legend: {
                //     orient: 'vertical',
                //     x: 'left',
                //     data:['in-stroy 36','stro-home 30','down-load 12']
                // },
                series: [
                    {
                        // name:'访问来源',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '10',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                       
                        data:[
                            {value:900,name:'in-stroy 36'},
                            {value:310,name:'stro-home 30'},
                            {value:700,name:'down-load 12'}
                        ]
                    }
                ]
            })

    }
}
</script>

<style scoped>
.chart{
    display: flex;
    width: 95%;
    margin: auto;
}
#zhu{
    float: left;
    width:70%;
    background: white;
    margin:30px 40px;
}
#bing{
    float: left;
    width:30%;
    margin:30px 0;
    background: white;
    text-align: center;
    
}
</style>


