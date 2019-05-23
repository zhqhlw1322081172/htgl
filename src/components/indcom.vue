<template>
    <div class="indcom">
        <h1>
            dashbord
            <span>summer dashedc is dd</span>
        </h1>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
    </div>
</template>

<script>
export default {
    name:"indcom",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.indcom{
    float:left;
    width: 100%;
    margin-left: 25px;
    margin-right: 10px;
    margin-bottom: 20px;
}

h1{
    width: 100%;
    margin:100px auto 0;
    margin-bottom: 20px;
    font-size: 25px;
}
h1 span{
    font-size: 15px;
    font-weight: 100;
    color: gray;
}
.breadcrumb{
    background: white;
}
nav{
    width: 95%;
}
</style>


