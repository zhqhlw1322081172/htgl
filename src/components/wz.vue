<template>
    <div class="right">
        <div class="row">
            <div class="col-md-12">
                <h1 class="page-header">
                    {{msg}} <small>{{wz}}</small>
                </h1>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name:"wz",
    data(){
        return{
            msg:"Tables Page",
            wz:"responsive tables"
        }
    },
    components:{
        
    }
}
</script>

<style scoped>

h1{
    font-size: 38px;
    font-weight: 600;
}
small{
    font-weight: 400;
    line-height: 1;
    color: #777;
    font-size: 20px;
}

.row{
    padding-top:100px;
    margin-left: 3%;
}
</style>





