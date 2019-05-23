<template>
    <div class="row">
        <div class="col-md-4 col-sm-4">
            <div class="well">
                <h4>Normal Well</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
            </div>
        </div>
        <div class="col-md-4 col-sm-4">
            <div class="well well-lg">
                <h4>Large Well</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
            </div>
        </div>
        <div class="col-md-4 col-sm-4">
            <div class="well well-sm">
                <h4>Small Well</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"tabscom4",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.row{
    width: 96%;
    margin: auto;
    padding-top:20px;
}
.well{
    background: white;
}
.well-sm h4{
    padding-top: 10px;
}
.well-sm p{
    padding:20px 10px 20px;
    font-size: 16px;
    line-height: 25px;
    /* padding-top: 20px; */
}
p{
    padding:20px;
    font-size: 16px;
    line-height: 25px;
    margin: 0 0 10px;
}
h4{
    padding-top:20px;
    text-indent: 20px;
    font-weight: 500;
    font-size: 18px;
}
</style>


