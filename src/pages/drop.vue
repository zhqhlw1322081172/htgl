<template>
    <div>
        <indtop/>
        <indmenu/>
        <div class="right">
           <dropno/>
        </div>
        <copy/>
    </div>
</template>

<script>
import indtop from "../components/indtop"
import indmenu from "../components/indmenu"
import dropno from "../components/dropno"
import copy from "../components/copy"
export default {
    name:"drop",
    components:{
        indtop,indmenu,dropno,copy
    }
}
</script>

<style scoped>
.right{
    margin-left:260px;
    background: #E6E6E6;
    height: auto;
}
</style>

