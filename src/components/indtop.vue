<template>

    <div class="divtop navbar">
        <div class="left">
            <span class="iconfont icon-shezhi"></span>
            <span class="set">设置</span>
        </div>
        <ul class="nav nav-pills">
            <li role="presentation" class="dropdown">
                <a  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                   <span class="iconfont icon-xinxi">
                        <span  class="iconfont icon-arrow-up"></span>
                    </span>
                </a>
               <indtop1></indtop1> 
            </li>
            <li  role="presentation" class="dropdown">
                <a  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                   <span class="iconfont icon-iconfonttask">
                        <span  class="iconfont icon-arrow-up"></span>
                    </span>
                </a>
                <indtop2></indtop2>  
            </li>
           <li  role="presentation" class="dropdown">
               <a  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                   <span class="iconfont icon-lingdang">
                        <span  class="iconfont icon-arrow-up"></span>
                   </span>
                </a>
                 <indtop3></indtop3> 
            </li>
            <li role="presentation" class="dropdown">
                <a  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                   <span class="iconfont icon-fangqiuzhiyepeiyangzhuanhuan">
                        <span  class="iconfont icon-arrow-up"></span>
                   </span>
                </a>
                <indtop4></indtop4> 
            </li>
        </ul>
    </div>

<!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> -->
</template>

<script>
import indtop1 from "../components/indtop1"
import indtop2 from "../components/indtop2"
import indtop3 from "../components/indtop3"
import indtop4 from "../components/indtop4"
export default {
    name:"indtop",
    data(){
        return{

        }
    },
    components:{
        indtop1,indtop2,indtop3,indtop4
    }
}
</script>

<style scoped>
.divtop{
    background: black;
    width: 100%;
    z-index:5;
    height: 60px;
    position: absolute;
    position: fixed;
    display: flex;
    justify-content: space-between;
    top:0;
    opacity: .7;
}
.left{
    width: 260px;
    height: 60px;
}
.icon-shezhi{
    font-size: 25px;
    color: white;
    margin:0 20px;
}
.set{
    line-height: 60px;
    width: 260px;
    font-size: 22px;
    color: white;
    opacity: 1;
    font-weight: 700;
}
ul .dropdown{
    float: left;
    width: 74px;
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
}
.dropdown .iconfont{
    line-height: 60px;
    font-size: 20px;
    color: white;
    margin: 0 auto;
}
.caret{
    color: white;
}


</style>


