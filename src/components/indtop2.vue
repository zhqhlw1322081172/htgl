<template>
    <ul class="dropdown-menu dropdown-menu-right" >
        <li class="divider">
            <p>
                task1
                <span>60% component</span>
            </p>
            <div class="progress">
                <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                    <span class="sr-only">60% Complete (success)</span>
                </div>
            </div>
        </li>

        <li class="divider">
            <p>
                task2
                <span>40% component</span>
            </p>
            <div class="progress">
                <div class="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                    <span class="sr-only">40% Complete(info)</span>
                </div>
            </div>
        </li>

        <li class="divider">
            <p>
                task3
                <span>50% component</span>
            </p>
            <div class="progress">
                <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
                    <span class="sr-only">50% Complete(warning)</span>
                </div>
            </div>
        </li>

        <li class="divider">
            <p>
                task4
                <span>80% component</span>
            </p>
            <div class="progress">
                <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                    <span class="sr-only">80% Complete(danger)</span>
                </div>
            </div>
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
    width: 255px;
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
    color: black;
    width:245px;
    height:30px ;
}
.dropdown-menu li p span{
    float: right;
    color: red;
    margin-right: 10px;
}
.progress{
    width:233px;
    height: 10px;
}

.divider{
    color:gray;
}
</style>

