<template>
<div class="divmenu">
    <!-- <el-collapse v-model="activeNames" @change="handleChange"> -->
        <el-collapse accordion>
    <ul class="nav" id="main-menu">
        <router-link to='/'><li class="active-menu diff"><span class="iconfont icon-yibiaopan"></span>Dashboard</li></router-link>
        <router-link to='/element'><li class="active-menu"><span class="iconfont icon-diannao"></span>ulelement</li></router-link>
        <router-link to='/charts'><li class="active-menu"><span class="iconfont icon-tubiao"></span>charts</li></router-link>
        <router-link to='/tabs'><li class="active-menu"><span class="iconfont icon-bianji"></span>Tabs & Panels</li></router-link>
        <router-link to='/responsive'><li class="active-menu"><span class="iconfont icon-caidan"></span>Responsive Tables</li></router-link>
        <router-link to='/forms'><li class="active-menu"><span class="iconfont icon-bianji"></span>forms</li></router-link>
        <router-link to='/drop'>
        
            <li class="active-menu">
                <!-- <span class="iconfont icon-biaoge">
                </span>index -->
                <!-- <el-collapse v-model="activeNames" @change="handleChange"> -->
                    <el-collapse-item class="head">
                        <template slot="title" class="spans">
                        <!-- 一致性 Consistency<i class="header-icon el-icon-info"></i> -->
                            <span class="iconfont icon-biaoge"></span>
                            Multi-Level Dropdown
                        </template>
                        <div class="tittwo">tempiate name</div>
                        <div class="tittwo">tempiate name</div>
                        <div class="tittwo">tempiate name</div>
                    </el-collapse-item>
                <!-- </el-collapse> -->
            </li>
            </router-link>
            <router-link to='/lastcopy'><li class="active-menu"><span class="iconfont icon-bianji"></span>Empty page</li></router-link>
        <!-- </el-collapse> -->
    </ul>
    </el-collapse>
</div> 
</template>

<script>
export default {
    name:"indmenu",
    data(){
        return{

        }
    }
}
</script>


<style scoped>
.nav{
    width: 260px;
     float: left;
    background-color: #18A0A9 ;
}
.active-menu >>> .el-collapse-item__header{
     background: #18A0A9 !important;
     color:white;
     border:none;
}
.active-menu >>> .el-collapse-item__content {
   padding-bottom: 0;
   
   text-decoration: none;
}
.active-menu >>> .el-collapse-item__wrap {
border: none;
}
.divmenu{
    width: 260px;
    height: 100%;
    position: fixed;
    background-color: #18A0A9 ;
    left:0;
}
/* .nav a li:nth-child(1){
    margin-top:70px;
   
} */

.tittwo{
    text-indent: 20px;
    line-height: 54px;
     color: #fff;
     height: 54px;
     font-size: 18px;
     /* text-align: center; */
     background: rgb(43, 174, 184);
}
.diff{
    margin-top:70px;
}
.nav .active-menu{
    background-color: #18A0A9 ;
    color: #fff;
    width: 260px;
    /* height: 54px; */
    padding: 12px 10px;
    border-bottom: 1px solid rgba(107, 108, 109, 0.19);
}
span{
    margin-right: 20px;
    margin-left: 10px;
    margin-top:5px;
}
.icon-yibiaopan{
    font-size:22px;
}

</style>




