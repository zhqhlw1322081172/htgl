<template >

    <div class="card">
        <div class="card-body">
            <div class="cadetop">
                <span class="iconfont icon-weixin"></span>
            </div>
            <div class="cadebottom">
                <h3>23,543</h3>
                <strong>weixin</strong>
            </div>
        </div>
    </div>
   
</template>

<script>
export default {
    name:"indcomthe",
    data(){
        return{
           
        }
    }
}
</script>

<style scoped>
.card{
    display: inline-block;
   clear: both;
   width: 230px;
   margin-left: 25px;
}
.card-body{
    display: inline-block;
    width: 230px;
    float: left;
}

.cadetop{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ee77ca;
    text-align: center;
}

span{
    line-height: 100px;
    font-size: 25px;
    color: #d5e7df;
}
.cadebottom h3{
    color: rgb(128, 130, 133);
    font-size: 40px;
    padding-top: 20px;
}
.cadebottom strong{
    font-size: 15px;
    color: black;
}
    
</style>


