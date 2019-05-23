<template>
    <ul class="dropdown-menu dropdown-menu-right" >
        <li class="divider">
            <p>
                ANGLE
                <span>today</span>
            </p>
            <p>
            ANGLE is contentANGLE is contentANGLE is content.............  
            </p>
        </li>
        <li>
            <p>
                ANGLE
                <span>today</span>
            </p>
            <p>
                ANGLE is contentANGLE is contentANGLE is content.............  
            </p>
        </li>
        <li>
            <p>
                ANGLE
                <span>today</span>
            </p>
            <p>
                ANGLE is contentANGLE is contentANGLE is content.............  
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
    width: 529px;
    padding: 0;
}

.dropdown-menu li{
   height: 50px;
   border-bottom: 1px solid gray;
   margin: 0;
   padding: 0;
}
.more{
     margin-left: 10px;
     line-height: 50px;
     height: 50px;
     text-align: center;
     color:green;
}
.dropdown-menu li p{
    margin-left: 10px;
    color: black;
    width:489px;
    height:22px ;
}
.dropdown-menu li p span{
    float: right;
    color: red;
}
.divider{
    color:gray;
}
</style>

