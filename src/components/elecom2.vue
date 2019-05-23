<template>
  <div class="row">
    <div class="col-md-7">
      <div class="panel panel-default">
        <div class="panel-heading">Simple Buttons Examples</div>

        <div class="panel-body">
          <h4>Default Button</h4>
          <a href="#" class="btn btn-default">default</a>
          <a href="#" class="btn btn-primary">primary</a>
          <a href="#" class="btn btn-danger">danger</a>
          <a href="#" class="btn btn-success">success</a>
          <a href="#" class="btn btn-info">info</a>
          <a href="#" class="btn btn-warning">warning</a>

          <h4>Small Button</h4>
          <a href="#" class="btn btn-default btn-sm">default</a>
          <a href="#" class="btn btn-primary btn-sm">primary</a>
          <a href="#" class="btn btn-danger btn-sm">danger</a>
          <a href="#" class="btn btn-success btn-sm">success</a>
          <a href="#" class="btn btn-info btn-sm">info</a>
          <a href="#" class="btn btn-warning btn-sm">warning</a>

          <h4>Large Button</h4>

          <a href="#" class="btn btn-default btn-lg">default</a>
          <a href="#" class="btn btn-primary btn-lg">primary</a>
          <a href="#" class="btn btn-danger btn-lg">danger</a>
          <a href="#" class="btn btn-success btn-lg">success</a>
          <a href="#" class="btn btn-info btn-lg">info</a>
        </div>
      </div>
    </div>
    <div class="col-md-5">
      <div class="panel panel-default">
        <div class="panel-heading">Button Dropdowns</div>

        <div class="panel-body">
          <h4>Simple Button Dropdown Examples</h4>
          <div style="margin-top: 10px;">
            <div class="btn-group">
              <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle">
                Action
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            <div style="margin:5px;" class="btn-group">
              <button data-toggle="dropdown" class="btn btn-danger dropdown-toggle">
                Danger
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            <div style="margin:5px;" class="btn-group">
              <button data-toggle="dropdown" class="btn btn-warning dropdown-toggle">
                Danger
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>

            <div class="btn-group">
              <button data-toggle="dropdown" class="btn btn-success dropdown-toggle">
                Success
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button data-toggle="dropdown" class="btn btn-info dropdown-toggle">
                Info
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button data-toggle="dropdown" class="btn btn-default dropdown-toggle">
                Default
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
          </div>

          <h4>Split Button Dropdown Examples</h4>

          <div style="margin:5px;" class="btn-toolbar">
            <div class="btn-group">
              <button class="btn btn-primary">Action</button>
              <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle">
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn btn-danger">Danger</button>
              <button data-toggle="dropdown" class="btn btn-danger dropdown-toggle">
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn btn-warning">Warning</button>
              <button data-toggle="dropdown" class="btn btn-warning dropdown-toggle">
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>

            <div class="btn-group">
              <button class="btn btn-success">Success</button>
              <button data-toggle="dropdown" class="btn btn-success dropdown-toggle">
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
            <div class="btn-group">
              <button class="btn btn-info">Info</button>
              <button data-toggle="dropdown" class="btn btn-info dropdown-toggle">
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
              </ul>
            </div>
          </div>

          <h4>Buttons With Icons</h4>

          <button class="btn btn-default">
            <i class="fa fa-refresh"></i> Update
          </button>
          <button class="btn btn-primary">
            <i class="fa fa-edit"></i> Edit
          </button>
          <button class="btn btn-danger">
            <i class="fa fa-pencil"></i> Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"elecom2",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.row{
    width: 96%;
    margin:auto;
    display: inherit;
    padding-top:10px;
}
.panel-body{
    width: 95%;
    margin: auto;
    padding-bottom:20px;
}
.btn-default{
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
}
.panel-heading{
     width: 95%;
    margin: auto;
    padding:10px 0;
    font-size: 18px;
}
h4{
    padding:10px 0;
    font-weight: 100;
    font-size: 20px;
}
.col-md-7{
    background: white;
    margin:0 15px 0 0;
    width: 65%;
    padding:0;
    float: left;
}
.col-md-5{
    background: white;
    /* margin:0 0 0 15px; */
    padding:0;
    width: 40%;
    float: right;
}
</style>


