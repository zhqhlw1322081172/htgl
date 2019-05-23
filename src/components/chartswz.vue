<template>
    <div class="right">
        <div class="row">
            <div class="col-md-12">
                <h1 class="page-header">
                    {{msg}} <small>{{wz}}</small>
                </h1>
            </div>
        </div>
        <div class="chart">
            <charts1/>
            <charts2/>
            <charts3/>
            <charts4/>
        </div>
    </div>

</template>

<script>
import charts1 from './charts1'
import charts2 from './charts2'
import charts3 from './charts3'
import charts4 from './charts4'
export default {
    name:"lastwz",
    data(){
        return{
            msg:"charts",
            wz:"show up your stas"
        }
    },
    components:{
        charts1,charts2,charts3,charts4
    }
}
</script>

<style scoped>
.right{
    margin-left:260px;
    background: #E6E6E6;
    height: auto;
    min-height:1200px;
}
.chart{
    padding-top:20px;
    width: 95%;
    margin: auto;
    clear: both;
}
h1{
    font-size: 38px;
    font-weight: 600;
}
small{
    font-weight: 400;
    line-height: 1;
    color: #777;
    font-size: 20px;
}

.row{
    padding-top:100px;
    margin-left: 3%;
}
</style>




