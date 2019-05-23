<template>
  <div class="row">
    <div class="col-md-6">
      <!--   Kitchen Sink -->
      <div class="panel panel-default">
        <div class="panel-heading">Kitchen Sink</div>
        <div class="panel-body">
          <div class="table-responsive">
            <table class="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- End  Kitchen Sink -->
    </div>
    <div class="col-md-6">
      <!--   Basic Table  -->
      <div class="panel panel-default">
        <div class="panel-heading">Basic Table</div>
        <div class="panel-body">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- End  Basic Table  -->
    </div>
  </div>
</template>

<script>
export default {
    name:'rescom',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.row{
    width:100%;
    margin: auto;
    margin-top:20px;
}
.panel{
    background: white;
    padding:0 15px;
    width:98%;
}
.panel-heading{
    font-weight: 600;
    padding:10px 0;
}

</style>


