<template>
    <div class="res">
        <indtop/>
        <indmenu/>
        <wz/>
        <div class="right">
            <div class="chart">
                <reshead/>
                <rescom/>
                <rescom2/>
                <rescom1/>
            </div>
        </div>
        <copy/>
        
    </div>
</template>

<script>
import indtop from '../components/indtop'
import indmenu from '../components/indmenu'
import wz from '../components/wz'
import reshead from '../components/reshead'
import rescom from '../components/rescom'
import rescom1 from '../components/rescom1'
import rescom2 from '../components/rescom2'
import copy from '../components/copy'
export default {
    name:'responsive',
    components:{
        indtop,indmenu,wz,reshead,rescom,rescom2,rescom1,copy
    }
}
</script>

<style scoped>

.chart{
    width: 100%;
    margin: auto;
    height: auto;
    padding-top:20px;
    background: #E6E6E6;
}
.right{
    margin-left:260px;
    background: #E6E6E6;
    height: auto;
}
</style>


