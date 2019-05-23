<template>
  <div class="row">
    <div class="col-md-6">
      <!--    Hover Rows  -->
      <div class="panel panel-default">
        <div class="panel-heading">Hover Rows</div>
        <div class="panel-body">
          <div class="table-responsive">
            <table class="table table-hover">
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
      <!-- End  Hover Rows  -->
    </div>
    <div class="col-md-6">
      <!--    Context Classes  -->
      <div class="panel panel-default">
        <div class="panel-heading">Context Classes</div>

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
                <tr class="table-success">
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr class="table-info">
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr class="table-warning">
                  <td>3</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr class="table-danger">
                  <td>4</td>
                  <td>John</td>
                  <td>Smith</td>
                  <td>@jsmith</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!--  end  Context Classes  -->
    </div>
  </div>
</template>

<script>
export default {
    name:"rescom1"
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


