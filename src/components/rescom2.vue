<template>
  <div class="row">
    <div class="col-md-6">
      <!--    Striped Rows Table  -->
      <div class="panel panel-default">
        <div class="panel-heading">Striped Rows Table</div>
        <div class="panel-body">
          <div class="table-responsive">
            <table class="table table-striped">
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
      <!--  End  Striped Rows Table  -->
    </div>
    <div class="col-md-6">
      <!--    Bordered Table  -->
      <div class="panel panel-default">
        <div class="panel-heading">Bordered Table</div>
        <!-- /.panel-heading -->
        <div class="panel-body">
          <div class="table-responsive table-bordered">
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
      <!--  End  Bordered Table  -->
    </div>
  </div>
</template>

<script>
export default {
    name:"rescom2"
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


