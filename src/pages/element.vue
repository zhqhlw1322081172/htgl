<template>
    <div class="ele">
        <indtop/>
        <indmenu/>
        <elementwz/>
        <copy/>
    </div>
</template>

<script>
import indtop from '../components/indtop'
import indmenu from '../components/indmenu'
import elementwz from '../components/elementwz'
import copy from '../components/copy'
export default {
    name:"charts",
    data(){
        return{

        }
    },
    components:{
        indtop,indmenu,elementwz,copy
    }
}
</script>

<style>
.ele{
    background: #E6E6E6;
}
</style>


