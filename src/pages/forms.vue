<template>
     <div>
        <indtop/>
        <indmenu/>
        <wz/>
        <div class="right">
            <formcom/>
        </div>
        <copy/>
    </div>
</template>
<script>
import indtop from "../components/indtop"
import indmenu from "../components/indmenu"
import wz from "../components/wz"
import formcom from "../components/formcom"
import copy from "../components/copy"
export default {
    name:'forms',
    components:{
        indtop,indmenu,wz,formcom,copy
    }
}
</script>

<style>
.right{
    margin-left:260px;
    background: #E6E6E6;
    height: auto;
}
</style>


