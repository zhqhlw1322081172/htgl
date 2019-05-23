<template>
    <div class="right">
        <div class="row">
            <div class="col-md-12">
                <h1 class="page-header">
                    Empty Page <small>Create new page.</small>
                </h1>
            </div>
        </div>
        <!-- <copy/> -->
    </div>
</template>

<script>
import copy from './copy'
export default {
    name:"lastwz",
    components:{
        copy
    }
}
</script>

<style scoped>

h1{
    font-size: 36px;
}
small{
    font-weight: 400;
    line-height: 1;
    color: #777;
    font-size: 22px;
}
.row{
    padding-top:100px;
    margin-left: 3%;
}
</style>




