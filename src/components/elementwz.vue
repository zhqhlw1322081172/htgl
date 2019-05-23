<template>
    <div class="rightc">
        <div class="row">
            <div class="col-md-12">
                <h1 class="page-header">
                    {{msg}} <small>{{wz}}</small>
                </h1>
            </div>
        </div>
        <div class="chart">
            <elemass/>
            <elecom/>
            <elecom1/>
            <elecom2/>
        </div>
    </div>

</template>

<script>
import elemass from "./elemass"
import elecom from "./elecom"
import elecom1 from "./elecom1"
import elecom2 from "./elecom2"
export default {
    name:"lastwz",
    data(){
        return{
            msg:"UI Element",
            wz:"this is your ui elements section"
        }
    },
    components:{
        elemass,elecom,elecom1,elecom2
    }
}
</script>

<style scoped>
.rightc{
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





