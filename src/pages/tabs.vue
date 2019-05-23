<template>
    <div>
        <indtop/>
        <indmenu/>
        <wz/>
        <div class="right">
            <tabscom/>
            <tabscom1/>
            <tabscom2/>
            <tabscom3/>
            <tabscom4/>
            <tabscom5/>
        </div>
        <copy/>
    </div>
</template>

<script>
import indtop from "../components/indtop"
import indmenu from "../components/indmenu"
import wz from "../components/wz"
import tabscom from "../components/tabscom"
import tabscom1 from "../components/tabscom1"
import tabscom2 from "../components/tabscom2"
import tabscom3 from "../components/tabscom3"
import tabscom4 from "../components/tabscom4"
import tabscom5 from "../components/tabscom5"
import copy from "../components/copy"
export default {
    name:"tabs",
    components:{
        indtop,indmenu,wz,tabscom,tabscom1,tabscom2,tabscom3,
        tabscom4,tabscom5,copy
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


