<template>
    <div class="row">
        <div class="col-md-12">
            <div class="jumbotron">
                <h1>Jumbotron</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing.</p>
                <p class="btnp">
                    <a class="btn btn-primary btn-lg" role="button">Learn more</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"tabscom5"
}
</script>

<style scoped>
.row{
    width: 96%;
    margin: auto;
    padding-top:20px;
    /* background: white; */
}
.jumbotron{
    background: white;
    padding:20px;
}
h1{
    font-size: 63px;
}
.btn{
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
    color: #fff !important;
}
.btnp{
    padding:20px 5px;
}
.btn-primary {
    background-color: #337ab7;
    border-color: #2e6da4;
}


</style>


