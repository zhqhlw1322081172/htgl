<template >

    <!-- <div class="card">
        <div class="card-body">
            <div class="cadetop">
                <span class="iconfont icon-eye"></span>
            </div>
            <div class="cadebottom">
                <h3>8,457</h3>
                <strong>time day</strong>
            </div>
        </div>
    </div> -->
    

    <div class="card">
        <div class="card-body" v-for = "(item,index) in lists" :key="index">
            <div :class="item.clas">
                <span :class="item.icon"></span>
            </div>
            <div class="cadebottom">
                <h3>{{item.num}}</h3>
                <strong>{{item.word}}</strong>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name:"indcomone",
    data(){
        return{
            'lists':[
                {
                icon:'iconfont icon-eye',
                num:'8,457',
                word:'time day',
                clas:'cadetop1'
                },
                {
                icon:'iconfont icon-chat-gray',
                num:'15,823',
                word:'sales',
                clas:'cadetop2'  
                },
                {
                icon:'iconfont icon-weixin',
                num:'18,457',
                word:'shopping',
                clas:'cadetop3'  
                },
                {
                icon:'iconfont icon-shequ',
                num:'52,160',
                word:'peoper',
                clas:'cadetop4'  
                }
            ]
        }
    }
}
</script>

<style scoped>
.card{
   display: block;
   clear: both;
   background: #E6E6E6;
   margin-left: 25px;
   border:none;
}
.card-body{
    display: inline-block;
    background: white;
    width: 230px;
    margin-right:25px;
}
.cadetop1{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #65bd78;
    text-align: center;
}
.cadetop2{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #569dfa;
    text-align: center;
}
.cadetop3{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #db7e53;
    text-align: center;
}
.cadetop4{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ecb94a;
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


