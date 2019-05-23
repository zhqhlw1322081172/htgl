<template>
    <div>
        <indtop/>
        <indmenu/>
        <chartswz/>
        <copy/>
    </div>
</template>

<script>
import indtop from '../components/indtop'
import indmenu from '../components/indmenu'
import chartswz from '../components/chartswz'
import copy from '../components/copy'
export default {
    name:"charts",
    data(){
        return{

        }
    },
    components:{
        indtop,indmenu,chartswz,copy
    }
}
</script>

<style>
.col-md-6{
    background: white;
    width: 48%;
}
.panel-heading{
    font-weight: bolder;
}
</style>


