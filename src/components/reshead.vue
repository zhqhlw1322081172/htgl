<template>
  <div class="row box">
    <div class="col-md-12">
      <!-- Advanced Tables -->
      <div class="panel panel-default">
        <div class="panel-heading">Advanced Tables</div>
        <div class="panel-body">
          <div class="table-responsive">
            <div id="dataTables-example_wrapper" class="dataTables_wrapper form-inline" role="grid">
              <div class="row sele">
                <div class="col-sm-6">
                  <div class="dataTables_length" id="dataTables-example_length">
                    <label>
                      <select
                        name="dataTables-example_length"
                        aria-controls="dataTables-example"
                        class="form-control input-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select> records per page
                    </label>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div id="dataTables-example_filter" class="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        class="form-control input-sm"
                        aria-controls="dataTables-example"
                      >
                    </label>
                  </div>
                </div>
              </div>
              <table
                class="table table-striped table-bordered table-hover dataTable no-footer"
                id="dataTables-example"
                aria-describedby="dataTables-example_info"
              >
                <thead>
                  <tr role="row">
                    <th
                      class="sorting_asc"
                      tabindex="0"
                      aria-controls="dataTables-example"
                      rowspan="1"
                      colspan="1"
                      aria-sort="ascending"
                      aria-label="Rendering engine: activate to sort column ascending"
                      style="width: 167px;"
                    >Rendering engine</th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="dataTables-example"
                      rowspan="1"
                      colspan="1"
                      aria-label="Browser: activate to sort column ascending"
                      style="width: 251px;"
                    >Browser</th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="dataTables-example"
                      rowspan="1"
                      colspan="1"
                      aria-label="Platform(s): activate to sort column ascending"
                      style="width: 231px;"
                    >Platform(s)</th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="dataTables-example"
                      rowspan="1"
                      colspan="1"
                      aria-label="Engine version: activate to sort column ascending"
                      style="width: 139px;"
                    >Engine version</th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="dataTables-example"
                      rowspan="1"
                      colspan="1"
                      aria-label="CSS grade: activate to sort column ascending"
                      style="width: 98px;"
                    >CSS grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="gradeA odd">
                    <td class="sorting_1">Gecko</td>
                    <td class>Firefox 1.0</td>
                    <td class>Win 98+ / OSX.2+</td>
                    <td class="center">1.7</td>
                    <td class="center">A</td>
                  </tr>
                  <tr class="gradeA even">
                    <td class="sorting_1">Gecko</td>
                    <td class>Firefox 1.5</td>
                    <td class>Win 98+ / OSX.2+</td>
                    <td class="center">1.8</td>
                    <td class="center">A</td>
                  </tr>
                  <tr class="gradeA odd">
                    <td class="sorting_1">Gecko</td>
                    <td class>Firefox 2.0</td>
                    <td class>Win 98+ / OSX.2+</td>
                    <td class="center">1.8</td>
                    <td class="center">A</td>
                  </tr>
                  <tr class="gradeA even">
                    <td class="sorting_1">Gecko</td>
                    <td class>Firefox 3.0</td>
                    <td class>Win 2k+ / OSX.3+</td>
                    <td class="center">1.9</td>
                    <td class="center">A</td>
                  </tr>
                  <tr class="gradeA odd">
                    <td class="sorting_1">Gecko</td>
                    <td class>Camino 1.0</td>
                    <td class>OSX.2+</td>
                    <td class="center">1.8</td>
                    <td class="center">A</td>
                  </tr>
                  <tr class="gradeA even">
                    <td class="sorting_1">Gecko</td>
                    <td class>Camino 1.5</td>
                    <td class>OSX.3+</td>
                    <td class="center">1.8</td>
                    <td class="center">A</td>
                  </tr>
                  <tr class="gradeA odd">
                    <td class="sorting_1">Gecko</td>
                    <td class>Netscape 7.2</td>
                    <td class>Win 95+ / Mac OS 8.6-9.2</td>
                    <td class="center">1.7</td>
                    <td class="center">A</td>
                  </tr>
                  <tr class="gradeA even">
                    <td class="sorting_1">Gecko</td>
                    <td class>Netscape Browser 8</td>
                    <td class>Win 98SE+</td>
                    <td class="center">1.7</td>
                    <td class="center">A</td>
                  </tr>
                  <tr class="gradeA odd">
                    <td class="sorting_1">Gecko</td>
                    <td class>Netscape Navigator 9</td>
                    <td class>Win 98+ / OSX.2+</td>
                    <td class="center">1.8</td>
                    <td class="center">A</td>
                  </tr>
                  <tr class="gradeA even">
                    <td class="sorting_1">Gecko</td>
                    <td class>Mozilla 1.0</td>
                    <td class>Win 95+ / OSX.1+</td>
                    <td class="center">1</td>
                    <td class="center">A</td>
                  </tr>
                </tbody>
              </table>
              <div class="row flot">
                <div class="col-sm-6">
                  <div
                    class="dataTables_info"
                    id="dataTables-example_info"
                    role="alert"
                    aria-live="polite"
                    aria-relevant="all"
                  >Showing 1 to 10 of 57 entries</div>
                </div>
                <div class="col-sm-6">
                  <div
                    class="dataTables_paginate paging_simple_numbers"
                    id="dataTables-example_paginate"
                  >
                    <ul class="pagination">
                      <li
                        class="paginate_button previous disabled"
                        aria-controls="dataTables-example"
                        tabindex="0"
                        id="dataTables-example_previous"
                      >
                        <a href="#">Previous</a>
                      </li>
                      <li
                        class="paginate_button active"
                        aria-controls="dataTables-example"
                        tabindex="0"
                      >
                        <a href="#">1</a>
                      </li>
                      <li class="paginate_button" aria-controls="dataTables-example" tabindex="0">
                        <a href="#">2</a>
                      </li>
                      <li class="paginate_button" aria-controls="dataTables-example" tabindex="0">
                        <a href="#">3</a>
                      </li>
                      <li class="paginate_button" aria-controls="dataTables-example" tabindex="0">
                        <a href="#">4</a>
                      </li>
                      <li class="paginate_button" aria-controls="dataTables-example" tabindex="0">
                        <a href="#">5</a>
                      </li>
                      <li class="paginate_button" aria-controls="dataTables-example" tabindex="0">
                        <a href="#">6</a>
                      </li>
                      <li
                        class="paginate_button next"
                        aria-controls="dataTables-example"
                        tabindex="0"
                        id="dataTables-example_next"
                      >
                        <a href="#">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End Advanced Tables -->
    </div>
  </div>

</template>


<script>
export default {
    name:"reshead",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.box{
    background: white;
    width: 96%;
    padding:10px 0;
    margin: auto;
}
.dataTables_length{
    float: left;
    padding:10px 0;
}
.dataTables_filter{
    float: right;
    padding:10px 0;
}
.sele{
    width: 100%;
}
.pagination li:first-child a {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    color:rgb(209, 208, 208);
}
.flot{
    width: 100%;
}
.pagination{
    float: right;
}
.pagination li a {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
}
</style>

