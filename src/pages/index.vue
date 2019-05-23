<template>
    <div>
        <indtop/>
        <div class="box">
            <indmenu/>
            <div class="box1">
                <indcom/>
                <div class="f">
                    <indcomone/>
                </div>
                <indcomchart/>
                <indchart/>
                <indfoot/>
            </div>
            <copy/>
        </div>
        
    </div>
</template>

<script>
import indmenu from "../components/indmenu"
import indtop from "../components/indtop"
import indcom from "../components/indcom"
import indcomone from "../components/indcomone"
import indcomtwo from "../components/indcomtwo"
import indcomthe from "../components/indcomthe"
import indcomfore from "../components/indcomfore"
import indcomchart from "../components/indcomchart"
import indchart from "../components/indchart"
import indfoot from "../components/indfoot"
import copy from "../components/copy"
export default {
    name:"index",
    components:{
        indmenu,indtop,indcom,indcomone,indcomtwo,
        indcomthe,indcomfore,indcomchart,indchart,
        indfoot,copy
    }
}
</script>

<style>
.more{
     margin-left: 10px;
     line-height: 50px;
     height: 50px;
     text-align: center;
     color:green;
}
.box{
    width: 100%;
    background: #E6E6E6;
}
.box1{
    margin-left: 260px;
    overflow: hidden;
    height: auto;
}
.right{
    margin-left:260px;
    background: #E6E6E6;
    height: auto;
}
</style>


