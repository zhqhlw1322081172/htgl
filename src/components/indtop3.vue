<template>
    <ul class="dropdown-menu dropdown-menu-right" >
        <li class="divider">
            <p>
                <span class="iconfont icon-xinxi">
                     <i>new comment</i>
                </span>
                <span>14 min</span>
            </p>
           
        </li>

        <li class="divider">
            <p>
                <span class="iconfont icon-iconfonttask">
                    <i>new comment</i>
                </span>
                <span>13 min</span>
            </p>
        </li>

        <li class="divider">
            <p>
                <span class="iconfont icon-lingdang">
                    <i>new comment</i>
                </span>
                <span>11 min</span>
            </p>
        </li>

        <li class="divider">
            <p>
                <span class="iconfont icon-fangqiuzhiyepeiyangzhuanhuan">
                     <i>new comment</i>
                </span>
                <span>4 min</span>
            </p>
        </li>

        <li>
            <div class="more">
                look more....>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name:"indtop1",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.dropdown-menu{
    width: 230px;
    padding: 0;
}

.dropdown-menu li{
   height: 50px;
   border-bottom: 1px solid gray;
   margin: 0;
   padding: 0;
   margin:0 10px;
}

.dropdown-menu li p{
    color: #18A0A9;
    width:210px;
    height:50px ;
    font-size: 12px;
    line-height: 50px;
}
.dropdown-menu li p span:nth-child(2){
    float: right;
    color: red;
    margin-right: 10px;
}
.dropdown-menu li p i{
    font-size: 16px;
    margin-left: 5px;
    color: black;
}
.divider{
    color:gray;
}
</style>

