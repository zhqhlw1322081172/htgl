<template>
    <div class="row">
        <div class="col-md-4 col-sm-4">
            <div class="panel panel-info">
                <div class="panel-heading">
                    Info Panel
                </div>
                <div class="panel-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                </div>
                <div class="panel-footer">
                    Panel Footer
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-4">
            <div class="panel panel-warning">
                <div class="panel-heading">
                    Warning Panel
                </div>
                <div class="panel-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                </div>
                <div class="panel-footer">
                    Panel Footer
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-4">
            <div class="panel panel-danger">
                <div class="panel-heading">
                    Danger Panel
                </div>
                <div class="panel-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                </div>
                <div class="panel-footer">
                    Panel Footer
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"tabscom1",
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
    padding-top:40px;
}
.panel{
    background: white;
}
.panel-body{
    padding:20px;
}
.panel-heading{
    color: #000;
    border-color: #FFF;
    font-weight: bold;
    background: #FFFFFF;
    font-size: 16px;
    padding: 15px 15px 0
}
.panel-footer {
    padding: 10px 15px;
    background-color: #f5f5f5;
    border-top: 1px solid #ddd;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
}
.panel-info .panel-heading {
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
}
.panel-warning .panel-heading{
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
}
.panel-danger .panel-heading{
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
}
</style>

