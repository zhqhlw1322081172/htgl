<template>
    <div class="foot">
        <div class="left">
        <h2>tasks panel</h2>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item,index) in items" :key='index'>
                <div>
                    <span :class="item.icon"></span>
                    {{item.word}}
                </div>
                <span class="badge badge-primary badge-pill">{{item.num}}</span>
            </li>
        </ul>
        <a href="#" class="task">more tasks ></a>
    </div>
    <div class="rights">
         <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading">Panel heading</div>

            <!-- Table -->
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">s.No</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">user name</th>
                        <th scope="col">email id</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(trcom,index) in trcoms" :key="index">
                        <th scope="row">{{trcom.tr1}}</th>
                        <td>{{trcom.tr2}}</td>
                        <td>{{trcom.tr3}}</td>
                        <td>{{trcom.tr4}}</td>
                        <td>{{trcom.tr5}}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"indfoot",
    data(){
        return{
            'items':[
                {
                    icon:'iconfont icon-weixin',
                    word:'commented on a post',
                    num:'7 minutes ago'
                },
                {
                    icon:'iconfont icon-yibiaopan',
                    word:'order 392 ship',
                    num:'12 minutes ago'
                },
                {
                    icon:'iconfont icon-lingdang',
                    word:'invoice 653 has paid',
                    num:'36 minutes ago'
                },
                {
                    icon:'iconfont icon-fangqiuzhiyepeiyangzhuanhuan',
                    word:'a new urse has been add',
                    num:'1 hours ago'
                },
                {
                    icon:'iconfont icon-caidan',
                    word:'commented on a post',
                    num:'1.23 hours ago'
                },
                {
                    icon:'iconfont icon-iconfonttask',
                    word:'saved the world',
                    num:'yestaday'
                }
            ],
            'trcoms':[
                {
                    tr1:'1',
                    tr2:'john',
                    tr3:'keo',
                    tr4:'joen13245',
                    tr5:'name@1234.com'
                },
                 {
                    tr1:'2',
                    tr2:'lisa',
                    tr3:'gem',
                    tr4:'lisa13245',
                    tr5:'name@1342.com'
                },
                 {
                    tr1:'3',
                    tr2:'lazy',
                    tr3:'hello',
                    tr4:'lazy17455',
                    tr5:'name@1574.com'
                },
                 {
                    tr1:'4',
                    tr2:'honey',
                    tr3:'candy',
                    tr4:'honey14325',
                    tr5:'name@1634.com'
                },
                 {
                    tr1:'5',
                    tr2:'lili',
                    tr3:'cici',
                    tr4:'lili18467',
                    tr5:'name@1365.com'
                },
                 {
                    tr1:'6',
                    tr2:'mack',
                    tr3:'dear',
                    tr4:'mack13794',
                    tr5:'name@1978.com'
                }
            ]
        }
    }
}
</script>


<style scoped>
.foot{
    width: 95%;
    margin: auto;
}
.left{
    background: white;
    width:30%;
    margin-left: 35px;
    float:left;
    /* height:460px; */
}
.list-group-item{
    line-height: 25px;
}
.list-group-item:hover{
background-color: #f5f5f5;
}
.list-group{
    width: 92%;
    margin:auto;
}
.task{
    text-align: right;
    padding:10px 0;
    float: right;
}
.left h2{
    text-indent: 5%;
    font-size: 18px;
    padding: 10px 0;
}
.table{
    
    width: 90%;
    margin:auto;
    border:1px solid  #dee2e6;
}
.panel{
    margin-bottom:5%;
}
.panel-heading{
    padding:10px 0;
    font-size: 18px;
    font-weight: 600;
    text-indent: 5%;
}
.table-hover tbody tr:hover {
    background-color: #f5f5f5;
}
.table-striped tbody tr:nth-of-type(odd) {
   background-color: #f9f9f9;
}
.rights{
    background: white;
    float:right;
    width: 65%;
}
</style>


