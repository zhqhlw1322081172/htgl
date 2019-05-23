<template>
    <div class="mass">
        <p>Messages</p>
        <div class="ale">
            <div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
            <div class="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
            <div class="alert alert-success" role="alert">A simple success alert—check it out!</div>
            <div class="alert alert-danger" role="alert">A simple danger alert—check it out!</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"elemass",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.mass{
    background: white;
    width: 95%;
    margin: auto;
}
p{
    padding:20px 0;
    width: 96%;
    margin: auto;
    color: black;
    font-weight: 500;
    font-size: 18px;
}
.ale{
    width: 96%;
    margin: auto;
    padding-bottom:10px;
}

</style>

